import { Download, FileText, Presentation } from "lucide-react";

import { AppText } from "@/components/ui/AppText";

import type { LessonContent } from "../../types/lesson.types";

type LessonContentCardProps = {
  content: LessonContent;
};

export function LessonContentCard({ content }: LessonContentCardProps) {
  return (
    <div
      className={[
        "rounded-3xl border border-slate-200 bg-white",
        "p-5 shadow-sm",
        "transition-all duration-200",
        "hover:-translate-y-1 hover:shadow-md",
      ].join(" ")}
    >
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
          <Presentation size={24} />
        </div>

        <span className="rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-600">
          {content.learningOutcome}
        </span>
      </div>

      <AppText variant="cardTitle">{content.title}</AppText>

      <AppText variant="small" className="mt-2">
        {content.description}
      </AppText>

      <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
        <span>{content.grade}</span>

        <span>•</span>

        <span>Bilişim Teknolojileri</span>
      </div>

      <div className="mt-5 flex flex-col gap-2 sm:flex-row">
        <a
          href={content.presentationUrl}
          download
          className={[
            "inline-flex flex-1 items-center justify-center gap-1.5",
            "rounded-full bg-violet-600 px-4 py-2",
            "text-xs font-semibold text-white",
            "transition hover:bg-violet-700",
          ].join(" ")}
        >
          <Presentation size={15} />
          Slaytı İndir
          <Download size={14} />
        </a>

        <a
          href={content.pdfUrl}
          download
          className={[
            "inline-flex flex-1 items-center justify-center gap-1.5",
            "rounded-full border border-violet-300 px-4 py-2",
            "text-xs font-semibold text-violet-600",
            "transition hover:bg-violet-50",
          ].join(" ")}
        >
          <FileText size={15} />
          PDF'yi İndir
          <Download size={14} />
        </a>
      </div>
    </div>
  );
}
