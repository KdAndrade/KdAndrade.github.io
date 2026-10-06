const groups = [
  ['01', 'Backend', ['Java', 'Spring Boot', 'Python', 'REST APIs']],
  ['02', 'Databases', ['PostgreSQL', 'SQL', 'H2']],
  ['03', 'Testing & quality', ['JUnit', 'Mockito', 'Software testing']],
  ['04', 'Development tools', ['Git', 'GitHub', 'Maven', 'IntelliJ IDEA', 'VS Code']],
  ['05', 'Exploring next', ['Docker', 'CI/CD', 'Linux']],
];
export const stack = /* HTML */ `
  <section id="stack" class="container section">
    <div class="section-heading">
      <div>
        <p class="command">
          <span>$</span>
          skills --list
        </p>
        <h2>The tools behind the work.</h2>
      </div>
      <span class="small mono">A focused, evolving stack.</span>
    </div>
    <div class="stack-grid">
      ${groups
        .map(
          ([n, t, items]) => /* HTML */ `
            <div class="stack-group">
              <span class="index mono">${n}</span>
              <h3>${t}</h3>
              <ul>
                ${items
                  .map(
                    (x) => /* HTML */ `
                      <li>${x}</li>
                    `,
                  )
                  .join('')}
              </ul>
            </div>
          `,
        )
        .join('')}
    </div>
  </section>
`;
