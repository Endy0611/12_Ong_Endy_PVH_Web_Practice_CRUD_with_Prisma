"use client";

import {
  Mail,
  GraduationCap,
  User2,
  ArrowLeft,
  Calendar,
  ShieldCheck,
  MapPin,
  Phone,
} from "lucide-react";
import { Button, Card } from "@heroui/react";

export default function DetailComponent({ student }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="border-none shadow-2xl rounded-[2.5rem] overflow-hidden bg-white">
        <div className="relative h-48 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 rounded-2xl">
          <div className="absolute -bottom-16 left-10 flex items-end gap-6">
            <div className="size-32 rounded-[2rem] bg-white p-1.5 shadow-2xl">
              <div className="size-full bg-slate-100 rounded-[1.8rem] flex items-center justify-center text-blue-600 border-4 border-white">
                <User2 size={60} />
              </div>
            </div>
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-white tracking-tight">
                {student.name}
              </h1>
              <div className="flex gap-2 mt-2">
                <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-bold rounded-full border border-green-500/30 flex items-center gap-1">
                  <ShieldCheck size={14} /> {student.status}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-24 px-10 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <section className="space-y-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                Academic Details
              </h3>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="p-3 bg-white rounded-xl text-blue-600 shadow-sm">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase">
                    Enrolled Class
                  </p>
                  <p className="text-lg font-bold text-slate-800">
                    {student.class}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="p-3 bg-white rounded-xl text-blue-600 shadow-sm">
                  <Calendar size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase">
                    Enrollment Date
                  </p>
                  <p className="text-lg font-bold text-slate-800">
                    {student.joinedDate}
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                Contact Info
              </h3>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="p-3 bg-white rounded-xl text-blue-600 shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase">
                    Email Address
                  </p>
                  <p className="text-lg font-bold text-slate-800">
                    {student.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="p-3 bg-white rounded-xl text-blue-600 shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase">
                    Phone Number
                  </p>
                  <p className="text-lg font-bold text-slate-800">
                    {student.phone}
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Card>
    </div>
  );
}
