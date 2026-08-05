#!/usr/bin/env python3
import pathlib

p = pathlib.Path("src/app/api/contact/route.ts")
src = p.read_text(encoding="utf-8")

old = '''import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, organisation, contact, requirement } = await request.json();

    if (!name || !contact || !requirement) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    await resend.emails.send({'''

new = '''import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, organisation, contact, requirement } = await request.json();

    if (!name || !contact || !requirement) {
      return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "The enquiry form isn't fully set up yet. Please contact us directly by phone or email." },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({'''

n = src.count(old)
if n == 1:
    p.write_text(src.replace(old, new), encoding="utf-8")
    print("OK  Resend client instantiation made lazy")
else:
    print(f"WARN  found {n} matches, expected 1")
