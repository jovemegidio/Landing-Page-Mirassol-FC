"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contato" className="py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
              Contato
            </p>
            <h2 className="font-[family-name:var(--font-oswald)] text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6 text-foreground">
              Fale Conosco
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Tem alguma dúvida ou sugestão? Entre em contato conosco. Estamos
              sempre prontos para ouvir nossa torcida.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.label}
                  className="flex items-center gap-4 p-4 bg-muted border border-border"
                >
                  <info.icon className="text-primary shrink-0" size={20} />
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-wider">
                      {info.label}
                    </p>
                    <p className="text-foreground font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-muted border border-border p-6 md:p-8">
            <h3 className="font-[family-name:var(--font-oswald)] text-2xl font-semibold text-foreground uppercase mb-6">
              Envie sua mensagem
            </h3>
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
                  className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
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
                  className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
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
                  className="w-full bg-background border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Digite sua mensagem..."
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground px-6 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
