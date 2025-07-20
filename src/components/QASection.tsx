import { Card } from "@/components/ui/card";

const QASection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-l from-accent/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-r from-primary/10 to-transparent rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-hero bg-clip-text text-transparent">
            🧠 Кто такой QA и почему это профессия будущего?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            QA-инженер — это специалист, который находит ошибки до того, как их найдёт пользователь.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 text-center shadow-card hover:shadow-glow transition-smooth hover:scale-105 gradient-card">
            <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">💼</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Востребован в IT</h3>
            <p className="text-muted-foreground">
              Каждая IT-компания нуждается в качественном тестировании продуктов
            </p>
          </Card>
          
          <Card className="p-8 text-center shadow-card hover:shadow-glow transition-smooth hover:scale-105 gradient-card">
            <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Без опыта в программировании</h3>
            <p className="text-muted-foreground">
              Не нужно быть разработчиком — мы научим всему с нуля
            </p>
          </Card>
          
          <Card className="p-8 text-center shadow-card hover:shadow-glow transition-smooth hover:scale-105 gradient-card">
            <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">💰</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">Высокий доход</h3>
            <p className="text-muted-foreground">
              Заработок от 100 000 ₽ уже через несколько месяцев
            </p>
          </Card>
        </div>
        
        <div className="text-center">
          <p className="text-xl font-medium text-primary">
            🛠 Тестируй. Анализируй. Вливайся в IT без кода.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QASection;