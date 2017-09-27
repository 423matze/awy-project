var config = {
    
      fonts: {
        src: 'app/fonts/*',
        dest: 'dist/fonts/'
      },
    
      images: {
        src: 'app/images/**/*.+(png|jpg|jpeg|gif|svg)',
        dest: 'dist/images',
        options: {
          name: 'project'
        }
      },
    
      js: {
        src: 'app/js/**/*.js'
      },
    
      jshint: {
        reporterOptions: {
          ignoreWarning: true,
          ignoreInfo: true
        }
      },
    
      jscs: {
        dest: 'app/js',
        options: {
          fix: true,
          configPath: '.jscsrc'
        }
      },
    
      nunjucks: {
        src: 'app/pages/**/*.+(html|nunjucks|njk)',
        data: './app/data/data.json',
        templates: ['app/templates/'],
        render : { path : ['app/templates/'] },
        dest: 'app',
        data: './app/data/data.json',
        watch: [
          'app/pages/**/*.+(html|nunjucks|njk)',
          'app/templates/**/*',
          'app/data/data.json'
        ]
      },
    
      sass: {
        src: 'app/scss/**/*.scss',
        dest: 'app/css',
        options: {
          includePaths: [
            'app/bower_components',
            'node_modules'
          ]
        }
      },
    
      scsslint: {
        config: '.scss-lint.yml'
      },
     
      uncss: {
        options: {
          html: ['app/*.html'],
          ignore: [
            '.susy-test',
            /.is-/,
            /.has-/
          ]
        }
      },

      useref: {
        src: 'app/*.html',
        dest: 'dist'
      },

      dist: {
        src: ['dist/**/*','!dist/images','dist/images/**/*']
      }
    };
    
    module.exports = config;