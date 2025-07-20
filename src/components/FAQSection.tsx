import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Нужен ли опыт в IT для поступления на курс?",
      answer: "Нет, мы учим с полного нуля. Курс специально разработан для людей без технического background. Главное — желание учиться и работать в IT."
    },
    {
      question: "Смогу ли совмещать обучение с основной работой?",
      answer: "Да, курс имеет гибкий график. Обучение проходит в вечернее время и выходные дни. В среднем потребуется 10-15 часов в неделю."
    },
    {
      question: "Есть ли реальные задачи и проекты?",
      answer: "Конечно! Ты будешь работать на реальных проектах с первого месяца обучения. Заведёшь свой первый баг в боевой системе и создашь полноценное портфолио."
    },
    {
      question: "Что если я не найду работу после курса?",
      answer: "У нас есть гарантия трудоустройства. Если в течение 2 месяцев после окончания курса ты не найдёшь работу — возвращаем 100% стоимости обучения."
    },
    {
      question: "Какая зарплата у начинающего QA-инженера?",
      answer: "Junior QA-инженер в России получает от 80 000 до 150 000 рублей. После года работы зарплата может вырасти до 200 000+ рублей."
    },
    {
      question: "Какие инструменты я изучу на курсе?",
      answer: "Ты освоишь Jira, TestRail, Postman, базы данных SQL, Git, основы автоматизации тестирования и многое другое — всё, что нужно современному QA."
    },
    {
      question: "Помогаете ли с составлением резюме?",
      answer: "Да, это входит в пакет трудоустройства. Мы помогаем составить резюме, подготовиться к собеседованиям и сопровождаем до получения оффера."
    },
    {
      question: "Сколько длится поддержка после окончания курса?",
      answer: "Поддержка в трудоустройстве длится до 2 месяцев после окончания обучения. Доступ к материалам курса остаётся навсегда."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ❓ Часто задаваемые вопросы
          </h2>
          <p className="text-xl text-muted-foreground">
            Ответы на самые популярные вопросы о курсе
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 shadow-card gradient-card"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Не нашли ответ на свой вопрос?
          </p>
          <p className="text-lg font-medium">
            📞 Свяжитесь с нами, и мы ответим на все ваши вопросы!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;