import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./styles.css";

const Breadcrumbs = () => {
  const location = useLocation();
  const parts = location.pathname.split('/').filter(Boolean);
  return (
    <nav aria-label="Breadcrumb" className="breadcrumb">
      <ol style={{display:'flex',gap:8,alignItems:'center'}}>
        <li><Link to="/">Главная</Link></li>
        {parts.map((p, i) => {
          const to = '/' + parts.slice(0, i + 1).join('/');
          const label = decodeURIComponent(p).replace(/-/g, ' ');
          return (
            <li key={to} aria-current={i === parts.length - 1 ? 'page' : undefined}>
              <span style={{margin:'0 6px'}}>/</span>
              {i === parts.length - 1 ? <span>{label}</span> : <Link to={to}>{label}</Link>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

const Header = () => (
  <header className="header">
    <div className="container header-inner">
      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <Link to="/" className="brand" aria-label="Перейти на главную">
          <div className="logo" aria-hidden></div>
          <div style={{display:'none'}} className="brand-text"><div style={{fontWeight:700}}>YouthBank</div><div style={{fontSize:12,color:'var(--muted)'}}>Банк для молодёжи и предпринимателей</div></div>
        </Link>
        <nav className="nav" aria-label="Главное меню">
          <Link to="/dlya-molodezhi">Для молодёжи</Link>
          <Link to="/dlya-biznesa">Для бизнеса</Link>
          <Link to="/tarify">Тарифы</Link>
          <Link to="/podderzhka">Поддержка</Link>
          <Link to="/o-banke">О банке</Link>
        </nav>
      </div>

      <div className="cta">
        <Link to="/signup" className="btn btn-primary" aria-label="Открыть счёт">Открыть счёт</Link>
        <Link to="/login" className="btn btn-ghost" aria-label="Вход в приложение">Вход</Link>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <div className="container" style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:12}}>
      <div>
        <h4 style={{margin:0}}>YouthBank</h4>
        <p style={{marginTop:8,fontSize:14,color:'var(--muted)'}}>Банк для молодёжи и предпринимателей. Прозрачно. Быстро. Без скрытых комиссий.</p>
      </div>
      <div>
        <h5 style={{margin:0}}>Продукты</h5>
        <ul style={{marginTop:8}}>
          <li><Link to="/dlya-molodezhi">Студенческие карты</Link></li>
          <li><Link to="/dlya-biznesa/samozanyatym">Счёт для самозанятых</Link></li>
          <li><Link to="/tarify">Тарифы</Link></li>
        </ul>
      </div>
      <div>
        <h5 style={{margin:0}}>Поддержка</h5>
        <ul style={{marginTop:8}}>
          <li><Link to="/podderzhka/faq">FAQ</Link></li>
          <li><Link to="/podderzhka/kontakty">Контакты</Link></li>
        </ul>
      </div>
      <div>
        <h5 style={{margin:0}}>Юридическая информация</h5>
        <p style={{marginTop:8,fontSize:14,color:'var(--muted)'}}>Лицензии, политики, реквизиты. © {new Date().getFullYear()} YouthBank</p>
      </div>
    </div>
  </footer>
);

const Home = () => (
  <main className="container" role="main">
    <section style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24,alignItems:'center'}}>
      <div>
        <h1>Банк для молодёжи и предпринимателей</h1>
        <p style={{marginTop:12,fontSize:18,color:'var(--muted)'}}>Простые тарифы, быстрый запуск и инструменты для планирования — от первых зарплат до управления стартапом.</p>
        <div style={{marginTop:16,display:'flex',gap:12}}>
          <Link to="/signup" className="btn btn-primary">Открыть счёт</Link>
          <Link to="/tarify" className="btn btn-ghost">Подобрать тариф</Link>
        </div>
        <ul style={{marginTop:16,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}}>
          <li className="card">Без комиссий</li>
          <li className="card">Мгновенное открытие</li>
          <li className="card">Поддержка 24/7</li>
        </ul>
      </div>
      <div>
        <div className="card" style={{padding:24}}>
          <h3>Быстрый вход</h3>
          <p style={{marginTop:8}}>Вход через мобильное приложение или веб. Ваши данные под защитой.</p>
          <img src="https://via.placeholder.com/420x260?text=App+Preview" alt="app preview" style={{width:'100%',borderRadius:8,marginTop:12}} />
        </div>
      </div>
    </section>

    <section style={{marginTop:24}}>
      <h2>Сделано для вас</h2>
      <p style={{marginTop:8,color:'var(--muted)'}}>Карты и инструменты, которые понимают ритм вашей жизни — учёба, фриланс и стартапы.</p>
      <div style={{marginTop:16,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}}>
        <div className="card">Кэшбэк и бонусы</div>
        <div className="card">Накопления и визуальные копилки</div>
        <div className="card">Интеграции для бизнеса</div>
      </div>
    </section>
  </main>
);

const Youth = () => (
  <main className="container">
    <Breadcrumbs />
    <h2>Для молодёжи</h2>
    <p style={{color:'var(--muted)'}}>Студенческие карты, копилки, обучение и бонусы — всё, чтобы взять финансы под контроль.</p>

    <section style={{marginTop:16,display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
      <div className="card">
        <h3>Студенческие и молодёжные карты</h3>
        <p style={{marginTop:8}}>Виртуальная карта сразу после регистрации. Физическая — за неделю. Без абонентской платы.</p>
      </div>
      <div className="card">
        <h3>Цели и накопления</h3>
        <p style={{marginTop:8}}>Визуальные копилки, округление покупок и удобные графики прогресса.</p>
      </div>
    </section>

    <section style={{marginTop:16}}>
      <div className="card">
        <h3>История: Анна открывает счёт</h3>
        <p style={{marginTop:8,color:'var(--muted)'}}>Анна — 19 лет. Открыла тариф «Старт», оформила виртуальную карту за 3 минуты и настроила цель \"Париж — 30 000\" с округлением покупок.</p>
      </div>
    </section>
  </main>
);

const Business = () => (
  <main className="container">
    <Breadcrumbs />
    <h2>Для бизнеса</h2>
    <p style={{color:'var(--muted)'}}>Счета для самозанятых, ИП и ООО с автоматическими чеками, интеграциями и отчётностью в один клик.</p>

    <section style={{marginTop:16,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}}>
      <div className="card">
        <h3>Счёт для самозанятых</h3>
        <p style={{marginTop:8}}>Создайте счёт за пару минут, формируйте чеки и отправляйте клиентам через мессенджеры.</p>
      </div>
      <div className="card">
        <h3>Интеграция с бухучётом</h3>
        <p style={{marginTop:8}}>Поддержка Контур, Мое дело и выгрузка отчетности в одном файле.</p>
      </div>
      <div className="card">
        <h3>Управление доступом</h3>
        <p style={{marginTop:8}}>Назначайте роли для соучредителей и бухгалтера.</p>
      </div>
    </section>

    <section style={{marginTop:16}}>
      <div className="card">
        <h3>История: Илья и чеки</h3>
        <p style={{marginTop:8,color:'var(--muted)'}}>Илья — самозанятый дизайнер. Платежи автоматически категоризируются, чек формируется и отправляется в чат клиента.</p>
      </div>
    </section>
  </main>
);

const BusinessSamozanyatym = () => (
  <main className="container">
    <Breadcrumbs />
    <h2>Счёт для самозанятых</h2>
    <p style={{color:'var(--muted)'}}>Откройте счёт за считанные минуты — создавайте чеки и выгружайте выписки для налогов.</p>

    <div style={{marginTop:16}} className="card">
      <h3>Создать чек</h3>
      <p style={{marginTop:8}}>Пример автоматической генерации чека после получения платежа.</p>
      <div style={{marginTop:12,display:'flex',gap:12}}>
        <button className="btn btn-primary">Создать чек 15 000</button>
        <button className="btn btn-ghost">Отправить клиенту</button>
      </div>
    </div>
  </main>
);

const Tariffs = () => (
  <main className="container">
    <Breadcrumbs />
    <h2>Тарифы</h2>
    <p style={{color:'var(--muted)'}}>Сравнение тарифов для студентов, фрилансеров и стартапов.</p>

    <div style={{marginTop:16,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}}>
      <div className="card">
        <h3>Старт (для студентов)</h3>
        <p style={{marginTop:8}}>0 ₽ обслуживание, кэшбэк за первые покупки, виртуальная карта.</p>
        <div style={{marginTop:12}}><Link to="/signup" className="btn btn-primary">Подать заявку</Link></div>
      </div>
      <div className="card">
        <h3>Профи (фриланс)</h3>
        <p style={{marginTop:8}}>Отчётность, чеки, расширенные лимиты.</p>
      </div>
      <div className="card">
        <h3>Бизнес (стартап)</h3>
        <p style={{marginTop:8}}>Интеграция с бухсофт, мультипользовательский доступ.</p>
      </div>
    </div>
  </main>
);

const Support = () => (
  <main className="container">
    <Breadcrumbs />
    <h2>Поддержка</h2>
    <p style={{color:'var(--muted)'}}>FAQ, онлайн-чат, безопасность и способы сообщить о мошенничестве.</p>
    <div style={{marginTop:16,display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
      <div className="card">
        <h3>FAQ</h3>
        <ul style={{marginTop:8}}>
          <li>Как открыть счёт?</li>
          <li>Как заказать физическую карту?</li>
          <li>Что делать при утере карты?</li>
        </ul>
      </div>
      <div className="card">
        <h3>Онлайн-чат</h3>
        <p style={{marginTop:8}}>Свяжитесь с нами в чате — поддержка 24/7.</p>
      </div>
    </div>
  </main>
);

const About = () => (
  <main className="container">
    <Breadcrumbs />
    <h2>О банке</h2>
    <p style={{color:'var(--muted)'}}>Наша миссия — помочь молодым людям и предпринимателям управлять финансами просто и честно.</p>
    <div style={{marginTop:16,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12}}>
      <div className="card">Лицензии и регулирование</div>
      <div className="card">Вакансии и стажировки</div>
      <div className="card">Пресс-центр и новости</div>
    </div>
  </main>
);

const Signup = () => (
  <main className="container">
    <Breadcrumbs />
    <h2>Открыть счёт</h2>
    <p style={{color:'var(--muted)'}}>Регистрация за пару шагов — подтверждение по паспорту через камеру, выбор тарифа и получение виртуальной карты.</p>
    <div style={{marginTop:16}} className="card">
      <label style={{display:'block'}}>Имя
        <input style={{marginTop:8,width:'100%',padding:12,borderRadius:8,border:'1px solid #e6e6e6'}} placeholder="Анна П." />
      </label>
      <label style={{display:'block',marginTop:12}}>Паспорт (фото)
        <input type="file" style={{marginTop:8,width:'100%'}} />
      </label>
      <div style={{marginTop:16,display:'flex',gap:12}}><button className="btn btn-primary">Продолжить</button><Link to="/tarify" className="btn btn-ghost">Выбрать тариф</Link></div>
    </div>
  </main>
);

const Login = () => (
  <main className="container">
    <Breadcrumbs />
    <h2>Вход</h2>
    <p style={{color:'var(--muted)'}}>Войдите в приложение для доступа к дашборду, переводам и бизнес-инструментам.</p>
    <div style={{marginTop:16}} className="card">
      <label style={{display:'block'}}>Телефон или email
        <input style={{marginTop:8,width:'100%',padding:12,borderRadius:8,border:'1px solid #e6e6e6'}} placeholder="+7 900 000 00 00" />
      </label>
      <div style={{marginTop:16,display:'flex',gap:12}}><button className="btn btn-primary">Войти</button><Link to="/signup" className="btn btn-ghost">Создать аккаунт</Link></div>
      <p style={{marginTop:12,fontSize:13,color:'var(--muted)'}}>Демо: demo@youthbank.test / DemoPass!2025</p>
    </div>
  </main>
);

const Dashboard = () => (
  <main className="container">
    <Breadcrumbs />
    <h2>Личный кабинет</h2>
    <div style={{marginTop:12,display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:12}}>
      <div className="card">
        <h3>Баланс</h3>
        <div style={{marginTop:12,fontSize:22,fontWeight:700}}>46 200 ₽</div>
        <div style={{marginTop:12}}><Link to="/dashboard/transfers" className="btn btn-primary">Перевести</Link></div>
      </div>
      <div className="card">
        <h3>Цели</h3>
        <p style={{marginTop:8}}>Париж — 30 000 (35%)</p>
      </div>
      <div className="card">
        <h3>Мой бизнес</h3>
        <p style={{marginTop:8}}>Счёт: активирован • интеграция с Контур.Бухгалтерией</p>
        <div style={{marginTop:12}}><Link to="/dlya-biznesa" className="btn btn-ghost">Перейти в бизнес</Link></div>
      </div>
    </div>

    <section style={{marginTop:16}} className="card">
      <h3>Последние операции</h3>
      <ul style={{marginTop:8}}>
        <li style={{display:'flex',justifyContent:'space-between',padding:'8px 0',borderBottom:'1px solid #f0f0f0'}}><span>Оплата кафе</span><span style={{color:'#6c757d'}}>-420 ₽</span></li>
        <li style={{display:'flex',justifyContent:'space-between',padding:'8px 0'}}><span>Поступление от клиента</span><span style={{color:'#16a34a'}}>+15 000 ₽</span></li>
      </ul>
    </section>
  </main>
);

export default function App(){
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dlya-molodezhi" element={<Youth />} />
        <Route path="/dlya-biznesa" element={<Business />} />
        <Route path="/dlya-biznesa/samozanyatym" element={<BusinessSamozanyatym />} />
        <Route path="/tarify" element={<Tariffs />} />
        <Route path="/podderzhka/*" element={<Support />} />
        <Route path="/o-banke" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<main className="container"><h2>Страница не найдена</h2><p>Проверьте URL или вернитесь на <Link to="/">главную</Link>.</p></main>} />
      </Routes>
      <Footer />
    </Router>
  );
}
