"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contato@mirassolfc.com.br",
  },
  {
    icon: Phone,
    label: "Telefone",
    value: "(17) 3242-1925",
  },
  {
    icon: MapPin,
    label: "Endereço",
    value: "Av. Antônio José de Oliveira, 1925 - Mirassol, SP",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section ref={sectionRef} id="contato" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <p className="text-secondary uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Contato
            </p>
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-foreground">
              Fale <span className="text-primary">Conosco</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Tem alguma dúvida ou sugestão? Entre em contato conosco. Estamos
              sempre prontos para ouvir nossa torcida e fazer do Mirassol um
              clube cada vez melhor.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className={`flex items-center gap-4 p-4 bg-muted border border-border hover:border-primary/50 transition-all duration-500 group cursor-pointer hover:bg-muted/80 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <info.icon className="text-primary group-hover:scale-110 transition-transform" size={22} />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      {info.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            <div className="mt-8 aspect-video bg-muted border border-border relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-primary mx-auto mb-2" size={32} />
                  <p className="text-muted-foreground text-sm">Mirassol, SP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="bg-muted border border-border p-6 md:p-8 relative overflow-hidden">
              {/* Top accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />

              <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-semibold text-foreground uppercase mb-6">
                Envie sua mensagem
              </h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 bg-secondary/20 flex items-center justify-center mb-4 animate-scale-in">
                    <CheckCircle className="text-secondary" size={32} />
                  </div>
                  <p className="text-foreground font-semibold text-lg mb-2">
                    Mensagem enviada!
                  </p>
                  <p className="text-muted-foreground">
                    Entraremos em contato em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-muted-foreground uppercase tracking-wider mb-2"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-muted-foreground uppercase tracking-wider mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-muted-foreground uppercase tracking-wider mb-2"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all duration-300 resize-none"
                      placeholder="Digite sua mensagem..."
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-glow w-full bg-primary text-primary-foreground px-6 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25"
                  >
                    <Send size={18} />
                    Enviar Mensagem
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
