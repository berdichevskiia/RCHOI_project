import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

// Single-file multi-page React app (Tailwind-ready). Default export is the App component.
// Assumptions: Tailwind + Inter font available in the host project. If not, minimal CSS below provides fallbacks.

const SiteMeta = () => (
  <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>YouthBank — Банк для молодёжи и предпринимателей</title>
    <meta name="description" content="Надёжный банк для студентов, фрилансеров и стартапов. Быстрое открытие счёта, кэшбэк, инструменты для бизнеса и финансовая грамотность." />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
  </head>
);

// CSS variables for palette and base typography. Keeps WCAG 2.1 AA contrast.
const GlobalStyles = () => (
  <style>
    {`
    :root{
      --accent-cyan: #2ABDC6; /* energetic cyan-turquoise */
      --accent-orange: #FF6B35; /* warm orange for CTA */
      --bg-neutral: #F8F9FA;
      --text-dark: #212529;
      --muted: #6C757D;
      --btn-radius: 12px;
      --gap: 8px;
    }
    html,body,#root{height:100%;}
    body{
      margin:0;
      font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
      background:var(--bg-neutral);
      color:var(--text-dark);
      -webkit-font-smoothing:antialiased;
      -moz-osx-font-smoothing:grayscale;
      line-height:1.5;
    }
    a{color:inherit;text-decoration:none}

    /* Simple responsive container */
    .container{max-width:1100px;margin:0 auto;padding:24px;}

    /* Buttons */
    .btn-primary{background:var(--accent-cyan);color:white;border-radius:var(--btn-radius);padding:12px 18px;display:inline-block;min-height:48px;line-height:24px}
    .btn-primary:active{filter:brightness(.95)}
    .btn-outline{border:2px solid var(--accent-cyan);border-radius:var(--btn-radius);padding:10px 16px;display:inline-block;min-height:48px}
    .btn-danger{background:#e02420;color:white;border-radius:var(--btn-radius);padding:10px 16px}

    /* Header / Footer */
    header.site-header{background:white;border-bottom:1px solid #E9ECEF}
    .site-nav{display:flex;gap:16px;align-items:center}
    .logo{display:flex;align-items:center;gap:12px;font-weight:700}

    footer.site-footer{background:white;border-top:1px solid #E9ECEF;padding:32px 0;margin-top:40px}

    /* Breadcrumbs */
    .breadcrumbs{font-size:14px;color:var(--muted);margin-bottom:12px}

    /* Card */
    .card{background:white;border-radius:12px;padding:18px;box-shadow:0 2px 8px rgba(0,0,0,0.08);}

    /* Responsive grid */
    .grid-3{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
    @media(max-width:900px){.grid-3{grid-template-columns:repeat(1,1fr)}}

    /* Accessibility focus */
    a:focus,button:focus{outline:3px solid rgba(43,189,198,0.25);outline-offset:3px}
    `}
  </style>
);

// Small accessible Breadcrumbs component (depth <= 3 enforced by routes design)
function Breadcrumbs() {
  const { pathname } = useLocation();
  const parts = pathname.split('/').filter(Boolean);
  return (
    <nav aria-label="breadcrumb" className="breadcrumbs">
      <ol>
        <li><Link to="/">Главная</Link>{parts.length ? ' / ' : ''}</li>
        {parts.map((p, i) => {
          const url = '/' + parts.slice(0, i + 1).join('/');
          const isLast = i === parts.length - 1;
          return (
            <li key={url} aria-current={isLast ? 'page' : undefined}>
              {!isLast ? <Link to={url}>{decodeURIComponent(p.replace(/-/g, ' '))}</Link> : <span>{decodeURIComponent(p.replace(/-/g, ' '))}</span>}{i < parts.length - 1 ? ' / ' : ''}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'16px 0'}}>
        <div style={{display:'flex',alignItems:'center',gap:16}}>
          <Link to="/" className="logo" aria-label="Перейти на главную">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect width="24" height="24" rx="6" fill="var(--accent-cyan)" />
              <path d="M6 12h12v2H6z" fill="#fff" />
            </svg>
            <span style={{fontSize:18}}>YouthBank</span>
          </Link>
          <nav className="site-nav" aria-label="Основная навигация">
            <Link to="/dlya-molodezhi">Для молодёжи</Link>
            <Link to="/dlya-biznesa">Для бизнеса</Link>
            <Link to="/tarify">Тарифы</Link>
            <Link to="/podderzhka">Поддержка</Link>
            <Link to="/o-banke">О банке</Link>
          </nav>
        </div>
        <div style={{display:'flex',gap:12}}>
          <Link to="/signup" className="btn-primary">Открыть счёт</Link>
          <Link to="/login" className="btn-outline">Войти</Link>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container" style={{display:'flex',gap:24,flexWrap:'wrap',justifyContent:'space-between',alignItems:'flex-start'}}>
        <div style={{minWidth:220}}>
          <Link to="/" className="logo" aria-label="Перейти на главную">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect width="24" height="24" rx="6" fill="var(--accent-cyan)" />
              <path d="M6 12h12v2H6z" fill="#fff" />
            </svg>
            <div style={{display:'flex',flexDirection:'column'}}>
              <span style={{fontWeight:700}}>YouthBank</span>
              <small style={{color:'var(--muted)'}}>Банк для молодёжи и предпринимателей</small>
            </div>
          </Link>
        </div>
        <div style={{display:'flex',gap:32,flexWrap:'wrap'}}>
          <div>
            <strong>Продукты</strong>
            <ul style={{listStyle:'none',padding:0}}>
              <li><Link to="/dlya-molodezhi">Для молодёжи</Link></li>
              <li><Link to="/dlya-biznesa">Для бизнеса</Link></li>
              <li><Link to="/tarify">Тарифы</Link></li>
            </ul>
          </div>
          <div>
            <strong>Помощь</strong>
            <ul style={{listStyle:'none',padding:0}}>
              <li><Link to="/podderzhka/faq">FAQ</Link></li>
              <li><Link to="/podderzhka/chats">Чат поддержки</Link></li>
            </ul>
          </div>
          <div>
            <strong>О банке</strong>
            <ul style={{listStyle:'none',padding:0}}>
              <li><Link to="/o-banke">О нас</Link></li>
              <li><Link to="/o-banke/licenzii">Лицензии</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{borderTop:'1px solid #E9ECEF',padding:'18px 0',marginTop:18}}>
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <small style={{color:'var(--muted)'}}>© {new Date().getFullYear()} YouthBank — банковские услуги. Лицензии и юридическая информация доступны в разделе «О банке».</small>
          <div style={{display:'flex',gap:12}}>
            <a href="#" aria-label="Политика конфиденциальности">Политика конфиденциальности</a>
            <a href="#" aria-label="Публичная оферта">Публичная оферта</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Home() {
  return (
    <main>
      <div className="container">
        <section className="card" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:24}}>
          <div style={{flex:1}}>
            <h1 style={{fontSize:28,lineHeight:1.3,margin:0}}>Банк для молодёжи и предпринимателей</h1>
            <p style={{fontSize:16,color:'var(--muted)'}}>Быстрое открытие счёта, понятные тарифы и инструменты для роста — всё в одном приложении.</p>
            <div style={{display:'flex',gap:12,marginTop:16}}>
              <Link to="/signup" className="btn-primary" aria-label="Открыть счёт">Открыть счёт</Link>
              <Link to="/tarify" className="btn-outline">Подобрать тариф</Link>
              <Link to="/login" className="btn-outline">Войти в приложение</Link>
            </div>
            <ul style={{display:'flex',gap:12,marginTop:20,color:'var(--muted)'}}>
              <li>Без комиссий</li>
              <li>Мгновенное открытие</li>
              <li>Поддержка 24/7</li>
            </ul>
          </div>
          <div style={{width:320}}>
            <div className="card">
              <h3 style={{marginTop:0}}>Попробуйте виртуальную карту</h3>
              <p style={{color:'var(--muted)'}}>За три минуты получите виртуальную карту и начните копить на мечту.</p>
              <div style={{display:'flex',gap:8,marginTop:12}}>
                <div style={{flex:1}} className="btn-primary">Создать карту</div>
                <div style={{flex:1}} className="btn-outline">Подробнее</div>
              </div>
            </div>
          </div>
        </section>

        <section style={{marginTop:24}}>
          <h2 style={{fontSize:22}}>Для кого мы</h2>
          <div className="grid-3" style={{marginTop:12}}>
            <div className="card">
              <h3 style={{fontSize:18,marginTop:0}}>Студенты</h3>
              <p style={{color:'var(--muted)'}}>Тариф «Старт», копилки и финансовые курсы для начинающих.</p>
              <Link to="/dlya-molodezhi" className="btn-outline" style={{marginTop:12,display:'inline-block'}}>Перейти</Link>
            </div>
            <div className="card">
              <h3 style={{fontSize:18,marginTop:0}}>Фрилансеры</h3>
              <p style={{color:'var(--muted)'}}>Учёт доходов, автоматические чеки и интеграция с налоговой.</p>
              <Link to="/dlya-biznesa/samozanyatym" className="btn-outline" style={{marginTop:12,display:'inline-block'}}>Узнать больше</Link>
            </div>
            <div className="card">
              <h3 style={{fontSize:18,marginTop:0}}>Стартапы</h3>
              <p style={{color:'var(--muted)'}}>Расчётный счёт, интеграция с бухгалтерией и распределение прав доступа.</p>
              <Link to="/dlya-biznesa/ooo" className="btn-outline" style={{marginTop:12,display:'inline-block'}}>Для бизнеса</Link>
            </div>
          </div>
        </section>

        <section style={{marginTop:24}}>
          <h2 style={{fontSize:22}}>Истории пользователей</h2>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:12,marginTop:12}}>
            <article className="card">
              <strong>Анна, 19</strong>
              <p style={{color:'var(--muted)'}}>Открыла счёт за 3 минуты и начала копить на поездку в Париж с автоматическим округлением покупок.</p>
            </article>
            <article className="card">
              <strong>Илья, 26</strong>
              <p style={{color:'var(--muted)'}}>Создаёт чеки в один клик и выгружает выписки для бухгалтера.</p>
            </article>
            <article className="card">
              <strong>Мария, 28</strong>
              <p style={{color:'var(--muted)'}}>Оформила расчётный счёт для ООО и подключила Контур.Бухгалтерию.</p>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

function Youth() {
  return (
    <main className="container">
      <Breadcrumbs />
      <h1 style={{fontSize:28}}>Для молодёжи</h1>
      <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:16,marginTop:12}}>
        <section>
          <div className="card">
            <h2 style={{fontSize:22}}>Студенческие и молодёжные карты</h2>
            <p style={{color:'var(--muted)'}}>Бесплатные карты, кэшбэк и мобильный контроль.</p>
            <h3 style={{fontSize:18}}>Цели и накопления</h3>
            <p style={{color:'var(--muted)'}}>Виртуальные копилки, автоматическое округление и правила автоперевода.</p>
            <h3 style={{fontSize:18}}>Обучение</h3>
            <p style={{color:'var(--muted)'}}>Мини-курсы, советы и квизы для улучшения финансовой грамотности.</p>
          </div>
        </section>
        <aside>
          <div className="card">
            <h4 style={{marginTop:0}}>Быстрый доступ</h4>
            <ul style={{listStyle:'none',padding:0}}>
              <li><Link to="/signup">Открыть счёт</Link></li>
              <li><Link to="/tarify">Подобрать тариф</Link></li>
              <li><Link to="/podderzhka/faq">FAQ</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}

function Business() {
  return (
    <main className="container">
      <Breadcrumbs />
      <h1 style={{fontSize:28}}>Для бизнеса</h1>
      <div style={{display:'grid',gridTemplateColumns:'1fr 320px',gap:16,marginTop:12}}>
        <section>
          <div className="card">
            <h3 style={{fontSize:18}}>Счёт для самозанятых</h3>
            <p style={{color:'var(--muted)'}}>Быстрая регистрация, автоматические чеки, интеграция с ФНС.</p>
            <h3 style={{fontSize:18}}>Счёт для ИП и ООО</h3>
            <p style={{color:'var(--muted)'}}>Загрузка документов через камеру, распределение прав и интеграции.</p>
            <h3 style={{fontSize:18}}>Интеграция с бухгалтерией</h3>
            <p style={{color:'var(--muted)'}}>Контур, Моё дело и выгрузки в популярных форматах.</p>
          </div>
        </section>
        <aside>
          <div className="card">
            <h4 style={{marginTop:0}}>Бизнес-инструменты</h4>
            <ul style={{listStyle:'none',padding:0}}>
              <li><Link to="/dlya-biznesa/samozanyatym">Самозанятым</Link></li>
              <li><Link to="/dlya-biznesa/ip-ooo">ИП / ООО</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}

function Tariffs() {
  return (
    <main className="container">
      <Breadcrumbs />
      <h1 style={{fontSize:28}}>Тарифы и условия</h1>
      <div style={{marginTop:12}}>
        <div className="card">
          <h3 style={{fontSize:18}}>Сравнение тарифов</h3>
          <table style={{width:'100%',borderCollapse:'collapse'}}>
            <thead>
              <tr>
                <th style={{textAlign:'left',padding:12}}>Тариф</th>
                <th style={{textAlign:'left',padding:12}}>Целевая аудитория</th>
                <th style={{textAlign:'left',padding:12}}>Комиссии</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding:12}}>Старт</td>
                <td style={{padding:12}}>Студенты</td>
                <td style={{padding:12}}>0 ₽ — базовый пакет</td>
              </tr>
              <tr>
                <td style={{padding:12}}>Профи</td>
                <td style={{padding:12}}>Фриланс</td>
                <td style={{padding:12}}>Низкие комиссии, расширенные инструменты</td>
              </tr>
              <tr>
                <td style={{padding:12}}>Бизнес</td>
                <td style={{padding:12}}>ИП / ООО</td>
                <td style={{padding:12}}>Подробно — в условиях</td>
              </tr>
            </tbody>
          </table>
          <div style={{marginTop:12}}>
            <Link to="/tarify/calculator" className="btn-outline">Калькулятор доходности и кэшбэка</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function Support() {
  return (
    <main className="container">
      <Breadcrumbs />
      <h1 style={{fontSize:28}}>Поддержка</h1>
      <div style={{display:'grid',gridTemplateColumns:'2fr 1fr',gap:16,marginTop:12}}>
        <section>
          <div className="card">
            <h3 style={{fontSize:18}}>FAQ</h3>
            <p style={{color:'var(--muted)'}}>Ответы на частые вопросы: открытие счёта, комиссии, безопасность.</p>
            <h3 style={{fontSize:18}}>Онлайн-чат</h3>
            <p style={{color:'var(--muted)'}}>Связь с оператором 24/7 и поддержка через соцсети.</p>
            <h3 style={{fontSize:18}}>Безопасность</h3>
            <p style={{color:'var(--muted)'}}>Как сообщить о мошенничестве и советы по защите данных.</p>
          </div>
        </section>
        <aside>
          <div className="card">
            <h4 style={{marginTop:0}}>Обратная связь</h4>
            <p style={{color:'var(--muted)'}}>Форма для предложений и жалоб.</p>
            <Link to="/podderzhka/feedback" className="btn-outline">Написать нам</Link>
          </div>
        </aside>
      </div>
    </main>
  );
}

function About() {
  return (
    <main className="container">
      <Breadcrumbs />
      <h1 style={{fontSize:28}}>О банке</h1>
      <div style={{marginTop:12}}>
        <div className="card">
          <h3 style={{fontSize:18}}>Наша миссия</h3>
          <p style={{color:'var(--muted)'}}>Поддерживать финансовую независимость молодого поколения и помогать предпринимателям стартовать быстрее.</p>
          <h3 style={{fontSize:18}}>Лицензии и регулирование</h3>
          <p style={{color:'var(--muted)'}}>Информация о лицензиях и юридическая информация доступна в соответствующем разделе.</p>
        </div>
      </div>
    </main>
  );
}

function Dashboard() {
  // Simulated dashboard view for personal/business switching
  return (
    <main className="container">
      <Breadcrumbs />
      <h1 style={{fontSize:28}}>Личный кабинет</h1>
      <div style={{display:'grid',gridTemplateColumns:'1fr 360px',gap:16,marginTop:12}}>
        <section>
          <div className="card">
            <h3 style={{fontSize:18}}>Баланс</h3>
            <p style={{fontSize:24,fontWeight:700}}>59 320 ₽</p>
            <h4 style={{marginTop:8}}>Недавние операции</h4>
            <ul style={{listStyle:'none',padding:0,color:'var(--muted)'}}>
              <li>— 450 ₽ — Кафе</li>
              <li>+ 15 000 ₽ — Перевод от клиента</li>
              <li>— 1 200 ₽ — Подписка</li>
            </ul>
            <div style={{display:'flex',gap:8,marginTop:12}}>
              <Link to="/dashboard/transfer" className="btn-primary">Перевести</Link>
              <Link to="/dashboard/history" className="btn-outline">Выписка</Link>
            </div>
          </div>

          <div className="card" style={{marginTop:12}}>
            <h3 style={{fontSize:18}}>Переключение режимов</h3>
            <p style={{color:'var(--muted)'}}>Управляйте личными и бизнес-аккаунтами в одном приложении.</p>
            <div style={{display:'flex',gap:8,marginTop:8}}>
              <button className="btn-outline">Личный</button>
              <button className="btn-outline">Бизнес</button>
            </div>
          </div>
        </section>
        <aside>
          <div className="card">
            <h4 style={{marginTop:0}}>Настройки</h4>
            <ul style={{listStyle:'none',padding:0}}>
              <li><Link to="/dashboard/settings">Профиль</Link></li>
              <li><Link to="/dashboard/notifications">Уведомления</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  );
}

function NotFound() {
  return (
    <main className="container">
      <div className="card" style={{textAlign:'center'}}>
        <h1>Страница не найдена</h1>
        <p style={{color:'var(--muted)'}}>Похоже, мы не нашли то, что вы искали.</p>
        <Link to="/" className="btn-primary">На главную</Link>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <SiteMeta />
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dlya-molodezhi" element={<Youth />} />
        <Route path="/dlya-biznesa" element={<Business />} />
        <Route path="/dlya-biznesa/samozanyatym" element={<Business />} />
        <Route path="/dlya-biznesa/ooo" element={<Business />} />
        <Route path="/tarify" element={<Tariffs />} />
        <Route path="/tarify/calculator" element={<Tariffs />} />
        <Route path="/podderzhka/*" element={<Support />} />
        <Route path="/o-banke/*" element={<About />} />
        <Route path="/login" element={<div className="container"><Breadcrumbs /><div className="card"><h1>Вход</h1><p style={{color:'var(--muted)'}}>Вход через мобильное приложение или веб.</p></div></div>} />
        <Route path="/signup" element={<div className="container"><Breadcrumbs /><div className="card"><h1>Открыть счёт</h1><p style={{color:'var(--muted)'}}>Быстрая регистрация по паспорту через камеру. Виртуальная карта сразу в приложении.</p></div></div>} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
