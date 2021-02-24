module.exports = {
  pathPrefix: `/maximo/manage-playbook`,
  siteMetadata: {
    title: 'IBM Maximo EAM to Mange upgrade',
    description: 'Details for EAM to Mange upgrade',
    keywords: 'EAM Maximo Manage',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        repository: {
          baseUrl: 'https://github.ibm.com//maximo/manage-playbook',
          subDirectory: '',
          //branch: 'branch2', //specify edit in Github branch here.
           branch: 'main', //specify edit in Github branch here.

        },
        titleType: 'append',
      },
    },
  ],
};
