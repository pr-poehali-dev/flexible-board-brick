import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-black text-primary">FlexMaterial</h1>
          <div className="hidden md:flex items-center gap-8">
            <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О продукте</a>
            <Button size="sm" className="rounded-full">Связаться</Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-6 text-sm px-4 py-2 rounded-full">Инновационные материалы</Badge>
              <h2 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Гибкость <span className="text-primary">меняет</span> правила строительства
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Полимерная песчаная композиция нового поколения. Гибкая доска и кирпич для самых смелых архитектурных решений.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full text-lg px-8 hover:scale-105 transition-transform">
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-lg px-8 hover:scale-105 transition-transform">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-30"></div>
              <img 
                src="/img/e61e16f6-d32b-4e23-b54c-8460457b81ed.jpg" 
                alt="Гибкий материал" 
                className="relative rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Технология</Badge>
            <h3 className="text-4xl md:text-5xl font-black mb-4">Уникальная гибкость материала</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Революционная полимерная композиция позволяет материалу изгибаться без разрушения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-primary hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Zap" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Гибкость до 180°</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Материал изгибается в любом направлении без трещин и разрушений
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="Shield" size={28} className="text-secondary" />
                </div>
                <CardTitle className="text-2xl">Прочность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Выдерживает экстремальные нагрузки и температурные перепады
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary hover:scale-105 transition-all duration-300">
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Leaf" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-2xl">Экологичность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  100% безопасный состав из полимера и песка без вредных примесей
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img 
              src="/img/3e5c3d48-7c2b-4e50-9125-b96ca72df589.jpg" 
              alt="Демонстрация гибкости" 
              className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
            />
            <div>
              <h4 className="text-3xl font-bold mb-6">Революция в строительстве</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={18} className="text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Легкий монтаж</h5>
                    <p className="text-muted-foreground">Простая укладка на любые поверхности без специального инструмента</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={18} className="text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Долговечность 50+ лет</h5>
                    <p className="text-muted-foreground">Не разрушается от влаги, мороза и ультрафиолета</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={18} className="text-white" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-1">Широкая палитра</h5>
                    <p className="text-muted-foreground">Любые цвета и текстуры под ваш дизайн-проект</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <Badge className="mb-4">Продукция</Badge>
            <h3 className="text-4xl md:text-5xl font-black mb-4">Каталог материалов</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Выберите подходящий материал для вашего проекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/04a3b981-2ceb-42d2-958a-73d297753d90.jpg" 
                  alt="Гибкая доска" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-white">Хит продаж</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-3xl">Гибкая доска</CardTitle>
                <CardDescription className="text-base">
                  Идеальна для облицовки фасадов, заборов, террас и интерьеров
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Ruler" size={18} className="text-primary" />
                    <span className="text-sm">Размеры: 200x20x1.5 см</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Palette" size={18} className="text-primary" />
                    <span className="text-sm">15 цветов в наличии</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Package" size={18} className="text-primary" />
                    <span className="text-sm">Упаковка: 10 шт</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-black text-primary">от 1 200 ₽</p>
                    <p className="text-sm text-muted-foreground">за квадратный метр</p>
                  </div>
                  <Button className="rounded-full hover:scale-110 transition-transform">
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-secondary hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src="/img/e61e16f6-d32b-4e23-b54c-8460457b81ed.jpg" 
                  alt="Гибкий кирпич" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-secondary text-white">Новинка</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-3xl">Гибкий кирпич</CardTitle>
                <CardDescription className="text-base">
                  Революционное решение для отделки сложных архитектурных форм
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Ruler" size={18} className="text-secondary" />
                    <span className="text-sm">Размеры: 24x6x1 см</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Palette" size={18} className="text-secondary" />
                    <span className="text-sm">20 оттенков кирпича</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Package" size={18} className="text-secondary" />
                    <span className="text-sm">Упаковка: 50 шт</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-black text-secondary">от 950 ₽</p>
                    <p className="text-sm text-muted-foreground">за квадратный метр</p>
                  </div>
                  <Button variant="secondary" className="rounded-full hover:scale-110 transition-transform">
                    Заказать
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-black mb-6">Готовы начать проект?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Получите бесплатную консультацию и расчет стоимости материалов для вашего объекта
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 hover:scale-105 transition-transform">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить нам
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-lg px-8 bg-white/10 border-white hover:bg-white hover:text-primary hover:scale-105 transition-all">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать email
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-black text-primary mb-4">FlexMaterial</h3>
              <p className="text-sm text-muted-foreground">
                Инновационные гибкие материалы для строительства
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Гибкая доска</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гибкий кирпич</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Аксессуары</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (999) 123-45-67</li>
                <li>info@flexmaterial.ru</li>
                <li className="flex gap-3 pt-2">
                  <Icon name="Instagram" size={20} className="hover:text-primary cursor-pointer transition-colors" />
                  <Icon name="Facebook" size={20} className="hover:text-primary cursor-pointer transition-colors" />
                  <Icon name="Youtube" size={20} className="hover:text-primary cursor-pointer transition-colors" />
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 FlexMaterial. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
