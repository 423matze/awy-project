var config = {
    
      fonts: {
        src: 'app/fonts/**/*',
        dest: 'dist/fonts'
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
        dest: 'app',
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
      }
    };
    
    module.exports = config;