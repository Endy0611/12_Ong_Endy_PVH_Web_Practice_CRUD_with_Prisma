"use client";

import { Mail, GraduationCap, User2, ArrowRight } from "lucide-react";
import { Card } from "@heroui/react";
import Link from "next/link";

export default function CardComponent({ student }) {
  return (
    <div className="p-6">
      <Card className="max-w-[350px] border-none bg-white shadow-xl rounded-[2.5rem] overflow-hidden">
        <div className="p-0">
          <div className="h-24 w-full bg-gradient-to-tr from-blue-600 to-cyan-400 relative rounded-2xl">
            <div className="absolute -bottom-10 left-6">
              <div className="size-20 rounded-2xl bg-white p-1 shadow-lg">
                <div className="size-full bg-slate-100 rounded-xl flex items-center justify-center text-blue-600">
                  <User2 size={40} />
                </div>
              </div>
            </div>
          </div>

          <div className="px-6 pt-14 pb-4">
            <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
              {student.name}
            </h2>
            <p className="text-blue-600 font-medium flex items-center gap-1 text-sm mt-1">
              <GraduationCap size={16} />
              Class: {student.class}
            </p>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-slate-600">
                <div className="size-8 rounded-lg bg-slate-100 flex items-center justify-center">
                  <Mail size={16} />
                </div>
                <span className="text-sm truncate font-medium">
                  {student.email}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 pb-8 pt-2">
          <Link
            href={`/students/${student?.id}`}
            className="w-full bg-slate-900 text-white font-bold py-6 rounded-2xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group"
          >
            <span>View More</span>

            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </Card>
    </div>
  );
}
