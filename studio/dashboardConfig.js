export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62223684e5b08301956b1c59',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-23pqn22h',
                  apiId: 'eea0848b-b916-457f-8d2a-91f469bac0c6'
                },
                {
                  buildHookId: '622236849e7e67ff18561e7d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8tputbfx',
                  apiId: 'f52776cf-cf96-4782-94ba-9bceb054a04f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tayfunyaltur/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8tputbfx.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
