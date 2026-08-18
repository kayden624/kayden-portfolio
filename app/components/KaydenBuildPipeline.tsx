"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { FaAws, FaDocker, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const stages = [["IDEA", "Problem Solving", "pipeline-label-idea"], ["DESIGN", "UI/UX", "pipeline-label-design"], ["BUILD", "React + Next.js", "pipeline-label-build"], ["AI", "Python + AI APIs", "pipeline-label-ai"], ["DEPLOY", "AWS + Vercel + Docker", "pipeline-label-deploy"]] as const;
const technologies = [["React", FaReact, 0.00, -6], ["Next.js", SiNextdotjs, 0.13, 0], ["TypeScript", SiTypescript, 0.26, 6], ["Node.js", FaNodeJs, 0.39, -6], ["Python", FaPython, 0.52, 6], ["AWS", FaAws, 0.65, 0], ["Docker", FaDocker, 0.78, -6]] as const;
const PATH_D = "M 44 66 C 150 8, 356 12, 516 78 C 404 138, 140 164, 72 258 C 176 326, 392 332, 516 284";
const VIEWBOX_WIDTH = 560;
const VIEWBOX_HEIGHT = 360;
const ANIMATION_DURATION = 28000;

function pointOnPath(path: SVGPathElement, progress: number, offset: number) {
  const length = path.getTotalLength();
  const distance = Math.max(0, Math.min(1, progress)) * length;
  const point = path.getPointAtLength(distance);
  const nearby = path.getPointAtLength(Math.min(length, distance + 1));
  const dx = nearby.x - point.x;
  const dy = nearby.y - point.y;
  const magnitude = Math.hypot(dx, dy) || 1;
  return { x: point.x + (-dy / magnitude) * offset, y: point.y + (dx / magnitude) * offset };
}

function findStageProgresses(path: SVGPathElement) {
  const length = path.getTotalLength();
  const samples = Array.from({ length: 801 }, (_, index) => {
    const progress = index / 800;
    const point = path.getPointAtLength(progress * length);
    return { progress, x: point.x };
  });
  const localMaxima = samples.filter((sample, index) => index > 0 && index < samples.length - 1 && sample.x >= samples[index - 1].x && sample.x >= samples[index + 1].x && sample.progress > 0.08 && sample.progress < 0.55);
  const localMinima = samples.filter((sample, index) => index > 0 && index < samples.length - 1 && sample.x <= samples[index - 1].x && sample.x <= samples[index + 1].x && sample.progress > 0.45 && sample.progress < 0.9);
  const design = localMaxima.reduce((best, sample) => sample.x > best.x ? sample : best, localMaxima[0] ?? { progress: 0.25, x: -Infinity }).progress;
  const ai = localMinima.reduce((best, sample) => sample.x < best.x ? sample : best, localMinima[0] ?? { progress: 0.7, x: Infinity }).progress;
  return [0, design, (design + ai) / 2, ai, 1];
}

export default function KaydenBuildPipeline() {
  const reducedMotion = useReducedMotion();
  const canvasRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const iconRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const circleRefs = useRef<Array<SVGCircleElement | null>>([]);
  const innerCircleRefs = useRef<Array<SVGCircleElement | null>>([]);
  const stageRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const path = pathRef.current;
    if (!canvas || !path) return;
    let frame = 0;
    const start = performance.now();
    const stageProgresses = findStageProgresses(path);
    const render = (elapsed: number) => {
      const rect = canvas.getBoundingClientRect();
      const scaleX = rect.width / VIEWBOX_WIDTH;
      const scaleY = rect.height / VIEWBOX_HEIGHT;
      const renderPoint = (progress: number, offset: number) => {
        const point = pointOnPath(path, progress, offset);
        return { x: point.x * scaleX, y: point.y * scaleY };
      };
      stages.forEach((_, index) => {
        const progress = stageProgresses[index];
        const circle = circleRefs.current[index];
        const stage = stageRefs.current[index];
        if (!stage) return;
        const point = renderPoint(progress, 0);
        if (circle) {
          circle.setAttribute("cx", point.x.toFixed(2));
          circle.setAttribute("cy", point.y.toFixed(2));
        }
        const innerCircle = innerCircleRefs.current[index];
        if (innerCircle) {
          innerCircle.setAttribute("cx", point.x.toFixed(2));
          innerCircle.setAttribute("cy", point.y.toFixed(2));
        }
        stage.style.transform = `translate3d(${point.x}px, ${point.y}px, 0)`;
      });
      technologies.forEach(([, , initialProgress, offset], index) => {
        const icon = iconRefs.current[index];
        if (!icon) return;
        const progress = reducedMotion ? initialProgress : (initialProgress + (elapsed % ANIMATION_DURATION) / ANIMATION_DURATION) % 1;
        const point = renderPoint(progress, offset);
        icon.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`;
        const nearestStage = stageProgresses.reduce((closest, stageProgress, stageIndex) => {
          const distance = Math.abs(progress - stageProgress);
          const wrappedDistance = Math.min(distance, 1 - distance);
          return wrappedDistance < closest.distance ? { distance: wrappedDistance, stageIndex } : closest;
        }, { distance: 1, stageIndex: -1 });
        icon.style.opacity = nearestStage.distance < 0.045 ? "0.18" : nearestStage.distance < 0.08 ? "0.55" : "1";
      });
    };
    const resizeObserver = new ResizeObserver(() => render(reducedMotion ? 0 : performance.now() - start));
    resizeObserver.observe(canvas);
    render(0);
    if (!reducedMotion) {
      const tick = (now: number) => { render(now - start); frame = requestAnimationFrame(tick); };
      frame = requestAnimationFrame(tick);
    }
    return () => { cancelAnimationFrame(frame); resizeObserver.disconnect(); };
  }, [reducedMotion]);

  return (
    <div className="kayden-pipeline hidden w-full max-w-[560px] shrink-0 md:block" aria-label="Kayden Build Pipeline">
      <div className="pipeline-caption">IDEA <span aria-hidden="true">→</span> DEPLOYED PRODUCT</div>
      <div ref={canvasRef} className="pipeline-canvas">
        <svg className="pipeline-svg" viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`} preserveAspectRatio="none" fill="none" aria-hidden="true">
          <path ref={pathRef} className="pipeline-path" d={PATH_D} />
          <path className="pipeline-path pipeline-path-highlight" d={PATH_D} />
          <g className="pipeline-anchor-layer">
            {stages.map(([stage], index) => <g key={stage} aria-label={`${stage} anchor`}><circle ref={(node) => { circleRefs.current[index] = node; }} className="pipeline-anchor-dot" r="8" cx="0" cy="0" /><circle ref={(node) => { innerCircleRefs.current[index] = node; }} className="pipeline-anchor-dot-inner" r="3.5" cx="0" cy="0" /></g>)}
          </g>
        </svg>
        <div className="pipeline-layer pipeline-icons" aria-hidden="true">
          {technologies.map(([name, Icon], index) => <span key={name} ref={(node) => { iconRefs.current[index] = node; }} className="pipeline-tech" title={name}><Icon /></span>)}
        </div>
        <div className="pipeline-layer pipeline-stages">
          {stages.map(([stage, description, labelClass], index) => <div key={stage} ref={(node) => { stageRefs.current[index] = node; }} className="pipeline-stage" tabIndex={0} aria-label={`${stage}: ${description}`}><span className={`pipeline-stage-label ${labelClass}`}><span>{stage}</span><span className="pipeline-stage-detail">{description}</span></span></div>)}
        </div>
      </div>
    </div>
  );
}
