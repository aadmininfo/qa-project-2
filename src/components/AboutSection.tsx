import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            👨‍💻 Обо мне
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Card className="p-8 shadow-card gradient-card">
              <h3 className="text-2xl font-bold mb-6 text-primary">Меня зовут Лев</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Опытный QA-инженер с 5+ лет практики в крупных IT-компаниях. 
                  Прошёл путь от джуниора до тимлида QA команды.
                </p>
                <p>
                  За эти годы я понял, что QA — это не просто поиск багов. 
                  Это искусство обеспечения качества продукта и мостик между 
                  разработкой и пользователями.
                </p>
                <p>
                  Создал QA Academia, чтобы помочь людям войти в IT через 
                  одну из самых востребованных и перспективных профессий.
                </p>
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6 shadow-card gradient-card">
              <h4 className="text-xl font-semibold mb-4 text-primary">Мой опыт</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5+</span>
                  <span>лет в QA тестировании</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">50+</span>
                  <span>проектов протестировано</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">100+</span>
                  <span>учеников трудоустроено</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 shadow-card gradient-card">
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <p className="font-medium text-muted-foreground">
                  Моя миссия — сделать вход в IT простым и понятным для каждого
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;