const practices = [
  [
    '01',
    'Give each layer a job.',
    'Separate HTTP handling, business rules and persistence so changes stay easier to reason about.',
    'Layered architecture · Business logic',
  ],
  [
    '02',
    'Treat data changes as code.',
    'Model relational data deliberately and use migrations to keep schema changes versioned and repeatable.',
    'Relational databases · Flyway',
  ],
  [
    '03',
    'Check behavior, not assumptions.',
    'Use unit and controller tests to check business rules and request handling. Continue developing integration testing practices.',
    'JUnit · Mockito · Integration testing',
  ],
  [
    '04',
    'Keep the next change manageable.',
    'Design clear REST endpoints, make focused commits and keep code organization understandable to the team.',
    'REST API design · Git workflow · Code quality',
  ],
];
export const engineering = /* HTML */ `
  <section class="container section engineering">
    <div>
      <p class="command">
        <span>$</span>
        cat engineering.md
      </p>
      <h2>
        How I approach
        <br />
        the backend.
      </h2>
      <p class="section-intro">Practices I apply and keep developing in my projects.</p>
    </div>
    <div>
      ${practices
        .map(
          ([n, t, d, m]) => /* HTML */ `
            <article class="practice">
              <span class="mono index">${n}</span>
              <div>
                <h3>${t}</h3>
                <p>${d}</p>
                <p class="small mono practice-meta">${m}</p>
              </div>
            </article>
          `,
        )
        .join('')}
    </div>
  </section>
`;
