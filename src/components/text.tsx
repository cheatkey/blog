"use client";
import React, { Children, cloneElement, isValidElement } from "react";
import { motion } from "motion/react";
import PostBadge from "./post-badge";
import type { Transition, Variants } from "framer-motion";

const transition: Transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
  exit: {
    filter: "blur(10px)",
    transform: "translateY(-10%)",
    opacity: 0,
  },
};

const AnimatedText = () => {
  const introText = `UX와 DX, 생산성에 관심이 많은 4년차 프론트엔드 개발자입니다.`;
  const introWords = introText.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        // delayChildren: 0.1,
        staggerChildren: 0.04,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      variants={containerVariants}
      className={"p-10"}
    >
      <h1 className="mb-6 text-5xl font-semibold text-black tracking-tight leading-[120%]">
        {introWords.map((word, index) => (
          <React.Fragment key={index}>
            <motion.span
              className="inline-block"
              transition={transition}
              variants={variants}
            >
              {word}
            </motion.span>
            {index < introWords.length - 1 && " "}
          </React.Fragment>
        ))}
      </h1>

      <SequentialMotion
        delayStep={0.3}
        transition={transition}
        variants={variants}
        className="text-zinc-400 text-lg mb-8 tracking-tight"
      >
        <section className="flex flex-col">
          개발 생산성을 높이기 위한 시도들과, 트러블슈팅 경험을 글로 작성하고
          있습니다.
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-[1.5rem] text-zinc-700 font-semibold tracking-[-0.5px]">
            # Typescript
          </h2>
          예측 가능하고 안전한 코드를 만들기 위해 타입스크립트를 적극적으로
          사용하며, 타입 안정성과 응집도를 높이기 위한 구조를 고민합니다.
          <div className="flex flex-col gap-2">
            <PostBadge href="">
              Electron IPC 통신에서 타입 안전성을 확보하고
            </PostBadge>
            <PostBadge href="">
              모달의 인자와 반환값을 추론할 수 있는 타입 기반 모달 시스템
            </PostBadge>
            <PostBadge href="">useReducer 메소드 타입 자동으로 추론</PostBadge>
            <PostBadge href="">
              zod로 json schema를 자동으로 만드는 방법
            </PostBadge>
            <PostBadge href="">
              타입이 추론 되는 라우터 직접 구현해보기
            </PostBadge>
          </div>
        </section>

        <section className="flex flex-col gap-2">
          <h2 className="text-[1.5rem] text-zinc-700 font-semibold tracking-[-0.5px]">
            # Troubleshooting
          </h2>
          다양한 상황에서 발생한 문제를 정리하고, 그 원인과 해결 과정을
          기록해두었습니다.
          <div className="flex flex-col gap-2">
            <PostBadge href="">대규모 비동기 다루기</PostBadge>
            <PostBadge href="">Vite 사전 번들링 시 실패</PostBadge>
            <PostBadge href="">모바일 가상 키보드</PostBadge>
            <PostBadge href="">롤업 번들링</PostBadge>
          </div>
        </section>

        <section className="flex flex-col">
          <GitHubProfileCard
            href={"https://github.com/cheatkey"}
            avatarUrl={"https://avatars.githubusercontent.com/u/74400147?v=4"}
            name={"권신학"}
          />
        </section>
      </SequentialMotion>
    </motion.div>
  );
};

export default AnimatedText;

type GitHubProfileCardProps = {
  href: string;
  avatarUrl: string;
  name: string;
};

const GitHubProfileCard = ({
  href,
  avatarUrl,
  name,
}: GitHubProfileCardProps) => {
  return (
    <a
      href={href}
      className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white"
    >
      <img
        src={avatarUrl}
        alt="GitHub profile"
        className="w-24 h-24 rounded-full! shadow-none!"
      />
      <div className="flex flex-col">
        <span className="font-semibold text-zinc-800">{name}</span>
        <p className="text-sm text-blue-500 hover:underline">{href}</p>
      </div>
    </a>
  );
};

type SequentialMotionProps = {
  children: React.ReactNode;
  delayStep?: number;
  transition?: object;
  variants?: Variants;
  className?: string;
};

export const SequentialMotion = ({
  children,
  delayStep = 0.5,
  transition = {},
  variants = {},
  className,
}: SequentialMotionProps) => {
  const INITIAL_DELAY = 0.3;

  return (
    <>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return null;

        return (
          <motion.div
            transition={{
              delay: INITIAL_DELAY + index * delayStep,
              ...transition,
            }}
            variants={variants}
            className={className}
          >
            {cloneElement(child)}
          </motion.div>
        );
      })}
    </>
  );
};
