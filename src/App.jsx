import React from 'react';
import { Mail, Phone, MapPin, Award, Cpu, CheckCircle2, GraduationCap, Download, Zap, Languages, Layers, Code2 } from 'lucide-react';

// --- ASSETS IMPORT ---
import profileImg from './assets/profile.jpg';
import swLogo from './assets/solidwork.jpg';
import nrLogo from './assets/node-red.png';
import inventorLogo from './assets/inventer.jpg'; 
import labviewLogo from './assets/labview.png';
import pcworxLogo from './assets/pc-worx.jpg';
import vseccImg from './assets/vsecc.png';
import plcImg from './assets/ev-plcc.jpg';
import pythonLogo from './assets/python.jpg';

// --- DATA CONFIGURATION ---
const RESUME_DATA = {
  profile: {
    name: "Jiramet",
    surname: "Sukpanich",
    role: "Electrical Engineer",
    phone: "090-276-2447",
    email: "jiramet.su@gmail.com",
    location: "Nonthaburi, Thailand",
    image: profileImg
  },
  languages: [
    { name: "Thai", level: "Proficient" },
    { name: "English", level: "Intermediate" }
  ],
  license: {
    title: "Associate Electrical Engineer (Power)",
    id: "70479"
  },
  education: {
    degree: "B.Eng. in Power Electronics Technology",
    university: "King Mongkut's University of Technology North Bangkok"
  },
  experience: [
    {
      company: "IE Business Solution Co., Ltd.",
      role: "Engineer",
      period: "June 2025 – Present",
      tasks: [
        "Designed and enhanced a laser-based weed management robot for precision agriculture applications.",
        "Developed and customized an industrial workbench for assembly training, simulating a real production line to support teaching for Industrial Engineering students.",
        "Co-designed and built a Production Monitoring Demo Program to simulate real-time manufacturing dashboards, including production status, OEE, and downtime tracking.",
        "Training and knowledge development for technical teams.",
        "Coordinated with engineers, students, and management teams to ensure effective project demonstrations and technology transfer.",
        "Prepared technical reports, documentation, and training materials to support educational and industrial projects."
      ]
    },
    {
      company: "EGAT Diamond Service Co., Ltd.",
      role: "Assistant Project Development Head",
      period: "Jan 2025 – April 2025",
      tasks: [
        "Research and development of new DC Charger models.",
        "Analyzing and troubleshooting existing DC Charger models to enhance reliability.",
        "Cost reduction initiatives while maintaining product quality.",
        "Training and knowledge development for technical teams.",
        "Supervising and managing technical teams to meet operational goals.",
        "Planning production and maintenance workflows for technical teams.",
        "Overseeing engineering operations.",
        "Designing new DC Chargers to improve reliability.",
        "Developing and updating software to support new vehicle models."
      ]
    },
    {
      company: "EGAT Diamond Service Co., Ltd.",
      role: "Electrical Engineer & Software Development",
      period: "Oct 2023 – Dec 2024",
      tasks: [
        "Sourcing components for DC Chargers.",
        "Assembling DC Chargers.",
        "Developing software for DC Chargers.",
        "Programming HMI interfaces.",
        "Conducting safety tests to meet industry standards.",
        "Training in Taiwan for the development of new DC Charger controllers.",
        "Commissioning DC Chargers.",
        "Performing Preventive Maintenance (PM) and Corrective Maintenance (CM) to ensure proper functionality."
      ]
    }
  ],
  techStack: [
    { img: swLogo, label: "SolidWorks" },
    { img: inventorLogo, label: "Inventor" },
    { img: labviewLogo, label: "LabVIEW" },
    { img: nrLogo, label: "Node-RED" },
    { img: pcworxLogo, label: "PC Worx" },
    { img: pythonLogo, label: "Python" }
  ]
};

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-10 font-sans text-slate-900 relative overflow-x-hidden">
      
      {/* --- BACKGROUND EFFECT --- */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-enter {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
      `}</style>

      {/* --- DOWNLOAD BUTTON (Fixed Bottom Right) --- */}
      <div className="fixed bottom-8 right-8 z-50 animate-enter delay-500">
        <a 
          /* ตรงนี้คือจุดสำคัญ:
             1. เอาไฟล์ PDF ของคุณไปวางในโฟลเดอร์ 'public'
             2. ตั้งชื่อไฟล์ว่า resume.pdf (หรือชื่ออะไรก็ได้แล้วแก้ตรง href ให้ตรงกัน)
          */
          href="/Resume.pdf" 
          download="Resume-Jiramet_Sukpanich.pdf" /* ชื่อไฟล์ที่จะได้ตอนโหลด */
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-blue-500/40 transition-all hover:scale-110 flex items-center gap-2 font-bold cursor-pointer group no-underline"
        >
          <Download size={20} className="group-hover:animate-bounce" /> 
          <span className="hidden group-hover:inline transition-all duration-300">Download PDF</span>
        </a>
      </div>

      {/* --- MAIN CONTAINER --- */}
      <div className="mx-auto bg-white shadow-2xl max-w-5xl relative z-10 animate-enter duration-700 rounded-3xl overflow-hidden my-8">
        
        {/* ================= HEADER ================= */}
        <header className="bg-[#1a202c] text-white p-8 md:p-12 relative overflow-hidden">
          
          {/* Tech Decorative Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full -mr-20 -mt-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full -ml-20 -mb-20 blur-2xl"></div>
          <div className="absolute top-4 right-4 opacity-20">
             <Cpu size={120} />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Profile Image */}
            <div className="relative group shrink-0">
               <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-cyan-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000"></div>
               <div className="relative w-48 h-48 rounded-full border-4 border-white/20 shadow-xl overflow-hidden bg-slate-800">
                  <img 
                    src={RESUME_DATA.profile.image} 
                    alt="Profile" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${RESUME_DATA.profile.name}+${RESUME_DATA.profile.surname}&background=0284c7&color=fff&size=256`; }}
                  />
               </div>
            </div>

            <div className="text-center md:text-left flex-1">
              <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight leading-none mb-3 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
                {RESUME_DATA.profile.name} <br/><span className="text-blue-400">{RESUME_DATA.profile.surname}</span>
              </h1>
              
              <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
                 <Zap size={20} className="text-yellow-400 fill-yellow-400 animate-pulse" />
                 <p className="text-xl font-medium text-slate-300 tracking-widest uppercase">
                   {RESUME_DATA.profile.role}
                 </p>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-y-3 gap-x-6 text-sm text-slate-300 mb-6">
                <a href={`tel:${RESUME_DATA.profile.phone}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                  <Phone size={18} className="text-blue-400 group-hover:rotate-12 transition-transform"/> 
                  <span>{RESUME_DATA.profile.phone}</span>
                </a>
                <a href={`mailto:${RESUME_DATA.profile.email}`} className="flex items-center gap-2 hover:text-blue-400 transition-colors group">
                  <Mail size={18} className="text-blue-400 group-hover:rotate-12 transition-transform"/> 
                  <span>{RESUME_DATA.profile.email}</span>
                </a>
                <div className="flex items-center gap-2">
                  <MapPin size={18} className="text-blue-400"/> 
                  <span>{RESUME_DATA.profile.location}</span>
                </div>
              </div>

              {/* Languages */}
              <div className="flex flex-wrap justify-center md:justify-start gap-3">
                 {RESUME_DATA.languages.map((lang, idx) => (
                    <div key={idx} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl border border-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm">
                       <Languages size={16} className="text-blue-400" />
                       <span className="text-sm font-bold uppercase">{lang.name}</span>
                       <span className="text-[10px] text-slate-300 uppercase px-1.5 py-0.5 bg-white/10 rounded">{lang.level}</span>
                    </div>
                 ))}
              </div>
            </div>
          </div>
        </header>

        {/* ================= CONTENT BODY ================= */}
        <div className="p-8 md:p-16 space-y-16">

          {/* 1. EXPERIENCE */}
          <section className="animate-enter delay-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center shadow-sm ring-1 ring-blue-100">
                <CheckCircle2 size={28} />
              </div>
              <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Experience</h2>
            </div>

            <div className="space-y-12 border-l-2 border-slate-200 ml-6 pl-8 md:pl-12">
              {RESUME_DATA.experience.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-white border-4 border-blue-500 transition-all duration-300 group-hover:scale-125 group-hover:border-blue-600 shadow-[0_0_0_4px_rgba(59,130,246,0.1)] group-hover:shadow-[0_0_0_6px_rgba(59,130,246,0.2)]"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                    <h3 className="text-2xl font-bold text-slate-800 uppercase leading-tight group-hover:text-blue-700 transition-colors duration-300">{exp.role}</h3>
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full border border-blue-100 mt-2 md:mt-0 w-fit">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-lg font-bold text-slate-500 mb-4">{exp.company}</div>
                  
                  <ul className="space-y-3 text-slate-600 leading-relaxed list-disc ml-4 marker:text-blue-400">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="hover:text-slate-900 transition-colors">{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* 2. SPECIALIST HARDWARE */}
          <section className="animate-enter delay-200">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center shadow-sm ring-1 ring-blue-100">
                   <Layers size={28} />
                </div>
                <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Specialist Hardware</h2>
             </div>
             
             <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-8">
                   <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                       <div className="w-16 h-16 bg-slate-100 p-3 rounded-2xl border border-slate-200 shrink-0 flex items-center justify-center shadow-inner">
                         <img src={vseccImg} className="max-w-full max-h-full object-contain" alt="vSECC"/>
                       </div>
                       <div>
                         <div className="text-lg font-bold text-slate-800 leading-none mb-2">vSECC Controller</div>
                         <div className="text-sm text-slate-500">Expertise in DC Charger protocols & Communication</div>
                       </div>
                   </div>
                   <div className="flex items-start gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors">
                       <div className="w-16 h-16 bg-slate-100 p-3 rounded-2xl border border-slate-200 shrink-0 flex items-center justify-center shadow-inner">
                         <img src={plcImg} className="max-w-full max-h-full object-contain" alt="PLC"/>
                       </div>
                       <div>
                         <div className="text-lg font-bold text-slate-800 leading-none mb-2">Industrial PLC</div>
                         <div className="text-sm text-slate-500">Hardware assembly, Wiring & Commissioning</div>
                       </div>
                   </div>
                </div>
             </div>
          </section>

          {/* 3. SOFTWARE & TOOLS */}
          <section className="animate-enter delay-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center shadow-sm ring-1 ring-blue-100">
                  <Code2 size={28} />
                </div>
                <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Software & Tools</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {RESUME_DATA.techStack.map((tech, i) => (
                  <div key={i} className="bg-white border border-slate-200 p-4 rounded-2xl flex flex-col items-center gap-3 shadow-sm hover:shadow-lg hover:border-blue-400 hover:-translate-y-2 transition-all duration-300 cursor-default">
                    <div className="w-12 h-12 flex items-center justify-center">
                       <img src={tech.img} alt={tech.label} className="max-w-full max-h-full object-contain filter hover:brightness-110 transition-all" />
                    </div>
                    <span className="text-xs font-bold text-slate-500 uppercase text-center tracking-wider">{tech.label}</span>
                  </div>
                ))}
              </div>
          </section>

          <div className="grid md:grid-cols-2 gap-12">
            {/* 4. EDUCATION */}
            <section className="animate-enter delay-400">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center shadow-sm ring-1 ring-blue-100">
                    <GraduationCap size={28} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">Education</h2>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all h-full">
                  <h3 className="text-xl font-black text-slate-800 uppercase leading-tight mb-2">King Mongkut's University of Technology North Bangkok</h3>
                  <div className="h-1 w-20 bg-blue-500 rounded-full mb-4"></div>
                  <p className="text-slate-600 font-medium">B.Eng. in Power Electronics Technology</p>
                </div>
            </section>

            {/* 5. LICENSE */}
            <section className="animate-enter delay-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center shadow-sm ring-1 ring-blue-100">
                    <Award size={28} />
                  </div>
                  <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tight">License</h2>
                </div>
                
                <div className="bg-[#1a202c] text-white p-8 rounded-3xl relative overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-1 h-full flex flex-col justify-center">
                   <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -mr-10 -mt-10 blur-3xl animate-pulse"></div>
                   
                   <div className="relative z-10">
                      <div className="text-yellow-400 text-sm font-bold tracking-widest  mb-2">Thai Professional Engineering License</div>
                      <div className="text-2xl font-black leading-tight mb-6">{RESUME_DATA.license.title}</div>
                      <div className="inline-block bg-white/10 px-6 py-3 rounded-xl text-yellow-300 font-mono text-3xl font-bold tracking-widest border border-white/10 shadow-lg backdrop-blur-sm">
                          {RESUME_DATA.license.id}
                      </div>
                   </div>
                </div>
            </section>
          </div>

        </div>
        
        {/* FOOTER */}
        <div className="bg-slate-50 p-8 text-center text-sm text-slate-400 border-t border-slate-100">
          © {new Date().getFullYear()} {RESUME_DATA.profile.name}. Engineering Portfolio.
        </div>

      </div>
    </div>
  );
};

export default Portfolio;