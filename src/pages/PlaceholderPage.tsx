import { motion } from 'motion/react';
import { SectionHeading } from '@/src/components/ui/SectionHeading';

interface ContentPageProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const ContentPage = ({ title, subtitle, children }: ContentPageProps) => {
  return (
    <div className="pt-32 min-h-screen bg-neutral">
      <section className="py-12 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-accent rounded-full -ml-32 -mt-32 blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mb-48 blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
              {title}
            </h1>
            <div className="h-1.5 w-24 bg-accent mx-auto mb-8 rounded-full" />
            {subtitle && (
              <p className="text-xl text-white/70 max-w-3xl mx-auto font-serif-alt italic leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg prose-primary max-w-none"
          >
            {children ? (
              <div className="max-w-5xl mx-auto">
                {children}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-[3rem] shadow-sm border border-primary/5">
                <p className="text-primary/40 text-xl font-serif-alt italic">Sedang memuat data...</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};
