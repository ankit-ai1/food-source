"use client";
import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, Building2, User, FileText, Upload, Eye } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3 | 4 | 5;

interface FormState {
  isExistingCustomer: string;
  businessType: string;
  companyName: string;
  commercialReg: string;
  vatNumber: string;
  website: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
  city: string;
  address: string;
  notes: string;
  crFile: string;
  vatFile: string;
}

const steps = [
  { id: 1, label: "Status", icon: CheckCircle2 },
  { id: 2, label: "Type", icon: Building2 },
  { id: 3, label: "Info", icon: FileText },
  { id: 4, label: "Contact", icon: User },
  { id: 5, label: "Docs", icon: Upload },
];

const businessTypes = [
  "Restaurant",
  "Hotel",
  "Café",
  "Catering Company",
  "Grocery / Retail",
  "Food Manufacturer",
  "Other",
];

const cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Hyderabad", "Kolkata", "Pune", "Other"];

export default function OnboardingPage() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    isExistingCustomer: "",
    businessType: "",
    companyName: "",
    commercialReg: "",
    vatNumber: "",
    website: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    city: "",
    address: "",
    notes: "",
    crFile: "",
    vatFile: "",
  });

  const update = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const next = () => setStep((s) => Math.min(s + 1, 5) as Step);
  const prev = () => setStep((s) => Math.max(s - 1, 1) as Step);

  const canNext: Record<Step, boolean> = {
    1: !!form.isExistingCustomer,
    2: !!form.businessType,
    3: !!form.companyName && !!form.commercialReg,
    4: !!form.contactName && !!form.contactEmail && !!form.contactPhone,
    5: true,
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-stone-50 flex items-center justify-center pt-20">
        <div className="max-w-lg w-full mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-olive-50 border-4 border-olive-200 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-olive-500" size={40} />
          </div>
          <h2 className="font-heading text-3xl font-semibold text-stone-900">Application Submitted!</h2>
          <p className="text-stone-500 mt-4 leading-relaxed">
            Thank you for applying to partner with Food Sources. Our team will review your application and reach out within 1–2 business days.
          </p>
          <div className="mt-8 p-6 bg-white rounded-2xl border border-stone-100 text-left space-y-3">
            <h3 className="font-semibold text-stone-900 text-sm">What happens next?</h3>
            {[
              "Our team reviews your application",
              "Account manager assigned within 24h",
              "Welcome call to discuss your needs",
              "Account activated with tailored pricing",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-stone-500">
                <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xs font-bold shrink-0">
                  {i + 1}
                </span>
                {item}
              </div>
            ))}
          </div>
          <a href="/" className="btn-primary mt-8 inline-flex">Return to Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 pt-20">
      <div className="container-site max-w-2xl mx-auto py-16 px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="font-heading text-4xl font-semibold text-stone-900">Partnership Application</h1>
          <p className="text-stone-500 mt-2">Join hundreds of partners across India</p>
        </div>

        {/* Progress */}
        <div className="flex items-center justify-between mb-10">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const isDone = s.id < step;
            const isActive = s.id === step;
            return (
              <div key={s.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center gap-1.5">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                      isDone ? "bg-brand-600 border-brand-600 text-white" : isActive ? "bg-white border-brand-500 text-brand-600 shadow-md" : "bg-white border-stone-200 text-stone-400"
                    )}
                  >
                    {isDone ? <CheckCircle2 size={18} /> : <Icon size={18} />}
                  </div>
                  <span className={cn("text-xs font-medium hidden sm:block", isActive ? "text-brand-600" : isDone ? "text-stone-600" : "text-stone-400")}>
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={cn("flex-1 h-0.5 mx-2 transition-all duration-300", s.id < step ? "bg-brand-500" : "bg-stone-200")} />
                )}
              </div>
            );
          })}
        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-stone-100 overflow-hidden">
          <div className="p-8">

            {/* Step 1: Status */}
            {step === 1 && (
              <div>
                <h2 className="font-heading text-2xl font-semibold text-stone-900 mb-2">Welcome to Food Sources</h2>
                <p className="text-stone-500 mb-8">Let's get you started with your partnership application.</p>

                <p className="label-base text-base font-semibold mb-4">Are you an existing customer of Food Sources?</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { value: "yes", label: "YES", sub: "I already have an account" },
                    { value: "no", label: "NO", sub: "I'm a new customer" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => update("isExistingCustomer", opt.value)}
                      className={cn(
                        "p-6 rounded-2xl border-2 text-left transition-all duration-200",
                        form.isExistingCustomer === opt.value
                          ? "border-brand-500 bg-brand-50"
                          : "border-stone-200 hover:border-brand-300"
                      )}
                    >
                      <p className="font-semibold text-stone-900">{opt.label}</p>
                      <p className="text-sm text-stone-500 mt-1">{opt.sub}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Business Type */}
            {step === 2 && (
              <div>
                <h2 className="font-heading text-2xl font-semibold text-stone-900 mb-2">Business Type</h2>
                <p className="text-stone-500 mb-8">What best describes your business?</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {businessTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => update("businessType", type)}
                      className={cn(
                        "p-4 rounded-xl border-2 text-sm font-medium text-center transition-all duration-200",
                        form.businessType === type
                          ? "border-brand-500 bg-brand-50 text-brand-700"
                          : "border-stone-200 text-stone-600 hover:border-brand-300"
                      )}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Company Info */}
            {step === 3 && (
              <div>
                <h2 className="font-heading text-2xl font-semibold text-stone-900 mb-2">Company Information</h2>
                <p className="text-stone-500 mb-8">Tell us about your business.</p>

                <div className="space-y-5">
                  <div>
                    <label className="label-base">Company Name <span className="text-red-400">*</span></label>
                    <input type="text" value={form.companyName} onChange={(e) => update("companyName", e.target.value)} placeholder="Your company name" className="input-base" />
                  </div>
                  <div>
                    <label className="label-base">Commercial Registration No. <span className="text-red-400">*</span></label>
                    <input type="text" value={form.commercialReg} onChange={(e) => update("commercialReg", e.target.value)} placeholder="CR number" className="input-base" />
                  </div>
                  <div>
                    <label className="label-base">VAT Number</label>
                    <input type="text" value={form.vatNumber} onChange={(e) => update("vatNumber", e.target.value)} placeholder="VAT registration number" className="input-base" />
                  </div>
                  <div>
                    <label className="label-base">Website</label>
                    <input type="url" value={form.website} onChange={(e) => update("website", e.target.value)} placeholder="https://yourcompany.com" className="input-base" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Contact */}
            {step === 4 && (
              <div>
                <h2 className="font-heading text-2xl font-semibold text-stone-900 mb-2">Contact Information</h2>
                <p className="text-stone-500 mb-8">Who should we get in touch with?</p>

                <div className="space-y-5">
                  <div>
                    <label className="label-base">Contact Name <span className="text-red-400">*</span></label>
                    <input type="text" value={form.contactName} onChange={(e) => update("contactName", e.target.value)} placeholder="Full name" className="input-base" />
                  </div>
                  <div>
                    <label className="label-base">Email <span className="text-red-400">*</span></label>
                    <input type="email" value={form.contactEmail} onChange={(e) => update("contactEmail", e.target.value)} placeholder="work@company.com" className="input-base" />
                  </div>
                  <div>
                    <label className="label-base">Phone Number <span className="text-red-400">*</span></label>
                    <input type="tel" value={form.contactPhone} onChange={(e) => update("contactPhone", e.target.value)} placeholder="+91 98XXX XXXXX" className="input-base" />
                  </div>
                  <div>
                    <label className="label-base">City</label>
                    <select value={form.city} onChange={(e) => update("city", e.target.value)} className="input-base">
                      <option value="">Select your city</option>
                      {cities.map((c) => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="label-base">Address</label>
                    <input type="text" value={form.address} onChange={(e) => update("address", e.target.value)} placeholder="Street address" className="input-base" />
                  </div>
                  <div>
                    <label className="label-base">Additional Notes</label>
                    <textarea value={form.notes} onChange={(e) => update("notes", e.target.value)} placeholder="Any additional information..." rows={3} className="input-base resize-none" />
                  </div>
                </div>
              </div>
            )}

            {/* Step 5: Documents */}
            {step === 5 && (
              <div>
                <h2 className="font-heading text-2xl font-semibold text-stone-900 mb-2">Documents</h2>
                <p className="text-stone-500 mb-8">Upload your business documents for verification.</p>

                <div className="space-y-4">
                  {[
                    { key: "crFile", label: "Commercial Registration (CR)", required: true },
                    { key: "vatFile", label: "VAT Certificate", required: false },
                  ].map((doc) => (
                    <div key={doc.key}>
                      <label className="label-base">{doc.label} {doc.required && <span className="text-red-400">*</span>}</label>
                      <label className="flex items-center gap-4 p-4 rounded-xl border-2 border-dashed border-stone-200 hover:border-brand-400 cursor-pointer transition-all bg-stone-50 hover:bg-brand-50">
                        <Upload size={20} className="text-stone-400 shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-stone-700">Click to upload PDF, JPG or PNG</p>
                          <p className="text-xs text-stone-400 mt-0.5">Max 10MB</p>
                        </div>
                        <input type="file" className="sr-only" accept=".pdf,.jpg,.jpeg,.png" onChange={(e) => update(doc.key as keyof FormState, e.target.files?.[0]?.name ?? "")} />
                      </label>
                    </div>
                  ))}
                </div>

                {/* Review summary */}
                <div className="mt-8 p-5 rounded-2xl bg-stone-50 border border-stone-100">
                  <h3 className="font-semibold text-stone-900 text-sm mb-4 flex items-center gap-2">
                    <Eye size={16} className="text-brand-600" />
                    Application Summary
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span className="text-stone-400">Business Type</span><span className="font-medium text-stone-700">{form.businessType || "—"}</span></div>
                    <div className="flex justify-between"><span className="text-stone-400">Company</span><span className="font-medium text-stone-700">{form.companyName || "—"}</span></div>
                    <div className="flex justify-between"><span className="text-stone-400">Contact</span><span className="font-medium text-stone-700">{form.contactName || "—"}</span></div>
                    <div className="flex justify-between"><span className="text-stone-400">Email</span><span className="font-medium text-stone-700">{form.contactEmail || "—"}</span></div>
                    <div className="flex justify-between"><span className="text-stone-400">City</span><span className="font-medium text-stone-700">{form.city || "—"}</span></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer nav */}
          <div className="border-t border-stone-100 px-8 py-5 flex items-center justify-between bg-stone-50">
            <button
              onClick={prev}
              disabled={step === 1}
              className={cn("btn-ghost flex items-center gap-2", step === 1 && "opacity-30 pointer-events-none")}
            >
              <ArrowLeft size={16} />
              Back
            </button>

            {step < 5 ? (
              <button
                onClick={next}
                disabled={!canNext[step]}
                className={cn("btn-primary", !canNext[step] && "opacity-50 pointer-events-none")}
              >
                Next
                <ArrowRight size={16} />
              </button>
            ) : (
              <button
                onClick={() => setSubmitted(true)}
                className="btn-primary bg-olive-600 hover:bg-olive-700"
              >
                Submit Application
                <CheckCircle2 size={16} />
              </button>
            )}
          </div>
        </div>

        <p className="text-center text-xs text-stone-400 mt-6">
          By submitting, you agree to our Privacy Policy and Terms of Service.
        </p>
      </div>
    </div>
  );
}
