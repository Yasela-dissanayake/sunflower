"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface StatItem {
  value: string;
  label: string;
  icon: string;
}

export function EngagementSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    clients: 0,
    sessions: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const intervals = {
      clients: setInterval(
        () =>
          setCounts((prev) => ({
            ...prev,
            clients: prev.clients < 500 ? prev.clients + 10 : 500,
          })),
        30
      ),
      sessions: setInterval(
        () =>
          setCounts((prev) => ({
            ...prev,
            sessions: prev.sessions < 2000 ? prev.sessions + 40 : 2000,
          })),
        30
      ),
      satisfaction: setInterval(
        () =>
          setCounts((prev) => ({
            ...prev,
            satisfaction: prev.satisfaction < 98 ? prev.satisfaction + 2 : 98,
          })),
        50
      ),
    };

    return () => {
      Object.values(intervals).forEach(clearInterval);
    };
  }, [isVisible]);

  const stats: StatItem[] = [
    {
      value: `${counts.clients}+`,
      label: "Happy Clients",
      icon: "😊",
    },
    {
      value: `${counts.sessions}+`,
      label: "Sessions Completed",
      icon: "✨",
    },
    {
      value: `${counts.satisfaction}%`,
      label: "Satisfaction Rate",
      icon: "💚",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <Card
            key={stat.label}
            className="p-8 text-center hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <div className="text-4xl mb-2">{stat.icon}</div>
            <p className="text-5xl font-bold text-primary mb-2">{stat.value}</p>
            <p className="text-muted-foreground text-lg">{stat.label}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
