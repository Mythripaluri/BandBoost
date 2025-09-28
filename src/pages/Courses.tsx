import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BookOpen } from 'lucide-react';

const Courses = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="min-h-[60vh] flex items-center justify-center bg-gradient-hero">
          <div className="text-center space-y-6 px-4">
            <div className="bg-gradient-primary p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center shadow-glow">
              <BookOpen className="h-10 w-10 text-primary-foreground" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">Courses Page</h1>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto">
              Coming Soon! Explore our comprehensive IELTS preparation courses.
            </p>
            <div className="bg-card border border-border rounded-lg p-6 max-w-md mx-auto shadow-elegant">
              <p className="text-card-foreground">
                This page will showcase our IELTS Academic, General Training, and specialized skill courses.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;