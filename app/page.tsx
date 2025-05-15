import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowRight,
  BarChart,
  Building,
  CheckCircle,
  ChevronLeft,
  Code,
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Shield,
  Twitter,
  Users,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col" >
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Globe className="h-6 w-6 text-primary" />
            <span>الشركة المتميزة</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              الرئيسية
            </Link>
            <Link href="#services" className="text-sm font-medium hover:text-primary transition-colors">
              خدماتنا
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              من نحن
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-primary transition-colors">
              فريقنا
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
              مشاريعنا
            </Link>
            <Link href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
              آراء العملاء
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              اتصل بنا
            </Link>
          </nav>
          <Button className="hidden md:inline-flex">ابدأ الآن</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="home"
          className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-l from-primary/10 via-primary/5 to-background"
        >
          <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center gap-8">
            <div className="flex flex-col gap-4 md:gap-6 md:w-1/2 text-right">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                ارتقِ بأعمالك مع <span className="text-primary">حلولنا الاحترافية</span>
              </h1>
              <p className="text-muted-foreground text-base md:text-xl max-w-[600px]">
                نساعد الشركات على النمو من خلال استراتيجيات مبتكرة وحلول شاملة تحقق نتائج ملموسة.
              </p>
              <div className="flex gap-4 justify-end">
                <Button variant="outline">تعرف علينا</Button>
                <Button>
                  ابدأ الآن
                  <ChevronLeft className="mr-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/ads.png"
                alt="أعمال احترافية"
                width={600}
                height={600}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                خدماتنا
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">حلول متكاملة لأعمالك</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                نقدم مجموعة واسعة من الخدمات المصممة خصيصًا لتلبية احتياجات عملك ومساعدتك على تحقيق أهدافك.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              <Card className="border-border hover:border-primary/50 transition-all text-right">
                <CardHeader>
                  <div className="p-2 rounded-full bg-primary/10 w-fit mb-4">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>الاستراتيجية الرقمية</CardTitle>
                  <CardDescription>
                    استراتيجيات رقمية شاملة لتعزيز تواجدك عبر الإنترنت والوصول إلى جمهورك المستهدف.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="gap-1 p-0 hover:bg-transparent hover:text-primary mr-auto">
                    <ArrowRight className="h-4 w-4 ml-1" /> المزيد
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-border hover:border-primary/50 transition-all text-right">
                <CardHeader>
                  <div className="p-2 rounded-full bg-primary/10 w-fit mb-4">
                    <BarChart className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>تحليل البيانات</CardTitle>
                  <CardDescription>
                    تحليل متقدم للبيانات لمساعدتك على اتخاذ قرارات مستنيرة وتحسين عمليات أعمالك.
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="gap-1 p-0 hover:bg-transparent hover:text-primary mr-auto">
                    <ArrowRight className="h-4 w-4 ml-1" /> المزيد
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-border hover:border-primary/50 transition-all text-right">
                <CardHeader>
                  <div className="p-2 rounded-full bg-primary/10 w-fit mb-4">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>تطوير الويب</CardTitle>
                  <CardDescription>حلول ويب مخصصة مصممة لت��زيز تجربة المستخدم ودفع نمو الأعمال.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="gap-1 p-0 hover:bg-transparent hover:text-primary mr-auto">
                    <ArrowRight className="h-4 w-4 ml-1" /> المزيد
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-border hover:border-primary/50 transition-all text-right">
                <CardHeader>
                  <div className="p-2 rounded-full bg-primary/10 w-fit mb-4">
                    <Building className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>استشارات الأعمال</CardTitle>
                  <CardDescription>نصائح خبراء لتحسين عملياتك، وزيادة الكفاءة، وتعظيم الربحية.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="gap-1 p-0 hover:bg-transparent hover:text-primary mr-auto">
                    <ArrowRight className="h-4 w-4 ml-1" /> المزيد
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-border hover:border-primary/50 transition-all text-right">
                <CardHeader>
                  <div className="p-2 rounded-full bg-primary/10 w-fit mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>إدارة الفريق</CardTitle>
                  <CardDescription>استراتيجيات فعالة لإدارة الفريق لتحسين التعاون والإنتاجية.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="gap-1 p-0 hover:bg-transparent hover:text-primary mr-auto">
                    <ArrowRight className="h-4 w-4 ml-1" /> المزيد
                  </Button>
                </CardFooter>
              </Card>
              <Card className="border-border hover:border-primary/50 transition-all text-right">
                <CardHeader>
                  <div className="p-2 rounded-full bg-primary/10 w-fit mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>ضمان الجودة</CardTitle>
                  <CardDescription>عمليات شاملة لمراقبة الجودة لضمان أعلى المعايير لمنتجاتك وخدماتك.</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="gap-1 p-0 hover:bg-transparent hover:text-primary mr-auto">
                    <ArrowRight className="h-4 w-4 ml-1" /> المزيد
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/team.jpg"
                  alt="عن شركتنا"
                  width={600}
                  height={600}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 text-right">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground w-fit">
                  من نحن
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">فريق من الخبراء مكرس لنجاحك</h2>
                <p className="text-muted-foreground">
                  تأسست الشركة المتميزة في عام 2010، وكانت في طليعة تقديم حلول أعمال مبتكرة للعملاء في جميع أنحاء
                  العالم. يكرس فريقنا من الخبراء جهوده لمساعدة الشركات من جميع الأحجام على تحقيق أهدافها من خلال التخطيط
                  الاستراتيجي والابتكار التكنولوجي والخدمة الاستثنائية.
                </p>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-center gap-2 justify-end">
                    <span>أكثر من 200 عميل راضٍ</span>
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </li>
                  <li className="flex items-center gap-2 justify-end">
                    <span>خبرة تزيد عن 10 سنوات</span>
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </li>
                  <li className="flex items-center gap-2 justify-end">
                    <span>فريق من 50+ خبيرًا في المجال</span>
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </li>
                  <li className="flex items-center gap-2 justify-end">
                    <span>تواجد عالمي في أكثر من 15 دولة</span>
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </li>
                </ul>
                <Button className="w-fit mt-4 self-end">
                  اكتشف المزيد
                  <ChevronLeft className="mr-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">فريقنا</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">تعرف على خبرائنا</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                يجلب فريقنا من المحترفين المتفانين سنوات من الخبرة والمعرفة لمساعدة عملك على النجاح.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {[
                {
                  name: "سارة الأحمد",
                  position: "الرئيس التنفيذي والمؤسس",
                  image: "/placeholder.svg?height=400&width=400",
                  bio: "تمتلك أكثر من 15 عامًا من الخبرة في استراتيجية الأعمال والقيادة.",
                },
                {
                  name: "محمد العلي",
                  position: "مدير التكنولوجيا",
                  image: "/placeholder.svg?height=400&width=400",
                  bio: "خبير في ابتكار التكنولوجيا والتحول الرقمي.",
                },
                {
                  name: "ليلى الخالد",
                  position: "مديرة التسويق",
                  image: "/placeholder.svg?height=400&width=400",
                  bio: "متخصصة في إنشاء استراتيجيات تسويقية مؤثرة.",
                },
                {
                  name: "أحمد السالم",
                  position: "مطور رئيسي",
                  image: "/placeholder.svg?height=400&width=400",
                  bio: "شغوف بإنشاء حلول فعالة وقابلة للتطوير.",
                },
              ].map((member, index) => (
                <Card
                  key={index}
                  className="border-border hover:border-primary/50 transition-all overflow-hidden text-right"
                >
                  <div className="aspect-square relative">
                    <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                  </div>
                  <CardHeader>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{member.position}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.bio}</p>
                  </CardContent>
                  <CardFooter className="flex gap-4 justify-end">
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Twitter className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link href="#" className="text-muted-foreground hover:text-primary">
                      <Mail className="h-5 w-5" />
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                مشاريعنا
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">أعمالنا المميزة</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                نفخر بتقديم مجموعة من المشاريع الناجحة التي ساعدت عملائنا على تحقيق أهدافهم.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=400&width=600`}
                    alt={`مشروع ${item}`}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-white">
                    <h3 className="text-xl font-bold mb-2">مشروع {item}</h3>
                    <p className="text-sm text-center">استراتيجية متكاملة أدت إلى زيادة المبيعات بنسبة 150%</p>
                    <Button variant="outline" className="mt-4 text-white border-white hover:bg-white/20">
                      عرض التفاصيل
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                آراء العملاء
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">ماذا يقول عملاؤنا</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">نفخر برضا عملائنا وقصص نجاحهم.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                {
                  name: "أحمد محمد",
                  position: "الرئيس التنفيذي، شركة الابتكارات التقنية",
                  testimonial:
                    "العمل مع الشركة المتميزة كان نقطة تحول لأعمالنا. نهجهم الاستراتيجي واهتمامهم بالتفاصيل ساعدنا على زيادة إيراداتنا بنسبة 200% في غضون 6 أشهر فقط.",
                },
                {
                  name: "ليلى العبدالله",
                  position: "مديرة التسويق، الحلول العالمية",
                  testimonial:
                    "احترافية وتفاني فريق الشركة المتميزة لا مثيل له. لقد أنجزوا مشروعنا في الوقت المحدد وتجاوزوا كل توقعاتنا. أوصي بشدة بخدماتهم.",
                },
                {
                  name: "خالد العمري",
                  position: "مؤسس، مشاريع الشركات الناشئة",
                  testimonial:
                    "كشركة ناشئة، كنا بحاجة إلى شريك يفهم احتياجاتنا ويمكنه مساعدتنا على النمو. قدمت الشركة المتميزة لنا حلولًا مبتكرة كانت فعالة من حيث التكلفة.",
                },
              ].map((testimonial, index) => (
                <Card key={index} className="flex flex-col h-full text-right">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-4 justify-end">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="#f59e0b"
                          stroke="#f59e0b"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-5 w-5"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-muted-foreground">"{testimonial.testimonial}"</p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex items-center gap-4 mr-auto">
                      <div>
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      </div>
                      <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center">
                        <span className="text-primary font-bold">{testimonial.name.charAt(0)}</span>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold mb-2">+200</span>
                <span className="text-primary-foreground/80">عميل سعيد</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold mb-2">+500</span>
                <span className="text-primary-foreground/80">مشروع مكتمل</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold mb-2">+10</span>
                <span className="text-primary-foreground/80">سنوات خبرة</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-4xl md:text-5xl font-bold mb-2">+50</span>
                <span className="text-primary-foreground/80">عضو في الفريق</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col gap-4 text-right">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground w-fit">
                  اتصل بنا
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">دعنا نناقش مشروعك</h2>
                <p className="text-muted-foreground">
                  نحن هنا لمساعدتك في تحقيق أهداف عملك. تواصل معنا اليوم لمناقشة كيف يمكننا المساهمة في نجاحك.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 justify-end">
                    <div>
                      <h3 className="font-bold">العنوان</h3>
                      <p className="text-muted-foreground">123 شارع الأعمال، الرياض، المملكة العربية السعودية</p>
                    </div>
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-3 justify-end">
                    <div>
                      <h3 className="font-bold">البريد الإلكتروني</h3>
                      <p className="text-muted-foreground">info@alsharikaalmotamayeza.com</p>
                    </div>
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-3 justify-end">
                    <div>
                      <h3 className="font-bold">الهاتف</h3>
                      <p className="text-muted-foreground">+966 12 345 6789</p>
                    </div>
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
              <div className="bg-muted p-6 rounded-lg">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-right block"
                      >
                        الاسم
                      </label>
                      <Input id="name" placeholder="أدخل اسمك" className="text-right" />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-right block"
                      >
                        البريد الإلكتروني
                      </label>
                      <Input id="email" type="email" placeholder="أدخل بريدك الإلكتروني" className="text-right" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-right block"
                    >
                      الموضوع
                    </label>
                    <Input id="subject" placeholder="أدخل الموضوع" className="text-right" />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-right block"
                    >
                      الرسالة
                    </label>
                    <Textarea id="message" placeholder="أدخل رسالتك" className="min-h-[120px] text-right" />
                  </div>
                  <Button className="w-full">إرسال الرسالة</Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                هل أنت جاهز لتنمية أعمالك؟
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                دعنا نساعدك في تحقيق أهداف عملك وأخذ شركتك إلى المستوى التالي.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button variant="outline" size="lg">
                  تواصل مع فريق المبيعات
                </Button>
                <Button size="lg">
                  ابدأ الآن
                  <ChevronLeft className="mr-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 md:py-12 bg-background border-t">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 font-bold text-xl mb-4">
                <Globe className="h-6 w-6 text-primary" />
                <span>الشركة المتميزة</span>
              </div>
              <p className="text-muted-foreground text-right">
                شريكك الموثوق لنجاح الأعمال. نقدم حلولًا مبتكرة لمساعدة عملك على النمو.
              </p>
            </div>
            <div className="space-y-4 text-right">
              <h3 className="font-bold">روابط سريعة</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                    خدماتنا
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link href="#team" className="text-muted-foreground hover:text-primary transition-colors">
                    فريقنا
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                    مشاريعنا
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                    آراء العملاء
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                    اتصل بنا
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4 text-right">
              <h3 className="font-bold">خدماتنا</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    الاستراتيجية الرقمية
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    تحليل البيانات
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    تطوير الويب
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    استشارات الأعمال
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                    إدارة الفريق
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4 text-right">
              <h3 className="font-bold">تواصل معنا</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 justify-end">
                  <span className="text-muted-foreground">123 شارع الأعمال، الرياض، المملكة العربية السعودية</span>
                  <MapPin className="h-5 w-5 text-primary" />
                </li>
                <li className="flex items-center gap-2 justify-end">
                  <span className="text-muted-foreground">info@alsharikaalmotamayeza.com</span>
                  <Mail className="h-5 w-5 text-primary" />
                </li>
                <li className="flex items-center gap-2 justify-end">
                  <span className="text-muted-foreground">+966 12 345 6789</span>
                  <Phone className="h-5 w-5 text-primary" />
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} الشركة المتميزة. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
