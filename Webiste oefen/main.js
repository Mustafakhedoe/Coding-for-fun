
tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          aurora: {
            50: '#effdf5',
            100:'#d9f7e7',
            200:'#b4ecd1',
            300:'#83ddb5',
            400:'#4fcf98',
            500:'#22c07a', /* brand */
            600:'#16a566',
            700:'#107e4e',
            800:'#0d6040',
            900:'#0a4c34'
          }
        },
        boxShadow: {
          soft: '0 10px 30px rgba(0,0,0,0.08)'
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui']
        }
      }
    }
  }

//   <!-- DARK MODE SCRIPT -->
 
    const root = document.documentElement;
    const btn = document.getElementById('themeToggle');

    // bewaar voorkeur
    const setTheme = (mode) => {
      if (mode === 'dark') root.classList.add('dark'); else root.classList.remove('dark');
      localStorage.setItem('theme', mode);
    };

    // initialiseren
    const saved = localStorage.getItem('theme');
    if (saved) setTheme(saved);
    else if (window.matchMedia('(prefers-color-scheme: dark)').matches) setTheme('dark');

    // toggle
    btn.addEventListener('click', () => {
      const nowDark = !root.classList.contains('dark');
      setTheme(nowDark ? 'dark' : 'light');
    });
 
