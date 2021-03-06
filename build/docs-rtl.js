#!/usr/bin/env node

'use strict'

/*!
 * Script to convert sample to rtl.
 * Copyright 2017-2018 The Boosted Authors
 * Copyright 2017-2018 Orange
 * Licensed under MIT
 */

const sh = require('shelljs')
const os = require('os')

if (os.platform === 'linux') {
  sh.exec('echo linux')
  sh.exec('find _gh_pages/docs/4.3/examples/ -mindepth 1 -maxdepth 1 -type d -name "rtl-*" -exec bash -c \'rm -rf _gh_pages/docs/4.3/examples/$(basename "{}") ; rmdir _gh_pages/docs/4.3/examples/$(basename "{}")\' \\;', (code, stdout, stderr) => {
    console.log('Exit code:', code)
    console.log('Program output:', stdout)
    console.log('Program stderr:', stderr)

    sh.exec('find _gh_pages/docs/4.3/examples/ -mindepth 1 -maxdepth 1 -type d ! -name "screenshots" -exec bash -c \'mkdir -p _gh_pages/docs/4.3/examples/rtl-$(basename "{}") ; cp -av "{}"/* _gh_pages/docs/4.3/examples/rtl-$(basename "{}")/ ; rtlcss -e "-rtl.css" -d _gh_pages/docs/4.3/examples/rtl-$(basename "{}")/\' \\;', (code, stdout, stderr) => {
      console.log('Exit code:', code)
      console.log('Program output:', stdout)
      console.log('Program stderr:', stderr)
      sh.exec('find _gh_pages/docs/4.3/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/\\.css/-rtl\\.css/gi\' {} \\;', (code, stdout, stderr) => {
        console.log('Exit code:', code)
        console.log('Program output:', stdout)
        console.log('Program stderr:', stderr)
        sh.exec('find _gh_pages/docs/4.3/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/orangeIcons-rtl/orangeIcons/gi\' {} \\;', (code, stdout, stderr) => {
          console.log('Exit code:', code)
          console.log('Program output:', stdout)
          console.log('Program stderr:', stderr)
          sh.exec('find _gh_pages/docs/4.3/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/orangeHelvetica-rtl/orangeHelvetica/gi\' {} \\;', (code, stdout, stderr) => {
            console.log('Exit code:', code)
            console.log('Program output:', stdout)
            console.log('Program stderr:', stderr)
            sh.exec('find _gh_pages/docs/4.3/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/swiper\\.min-rtl/swiper\\.min/gi\' {} \\;', (code, stdout, stderr) => {
              console.log('Exit code:', code)
              console.log('Program output:', stdout)
              console.log('Program stderr:', stderr)
              sh.exec('find _gh_pages/docs/4.3/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/html lang="en"/html lang="en" dir="rtl"/gi\' {} \\;', (code, stdout, stderr) => {
                console.log('Exit code:', code)
                console.log('Program output:', stdout)
                console.log('Program stderr:', stderr)
              })
            })
          })
        })
      })
    })
  })
} else {
  sh.exec('echo not linux')
  sh.exec('find _gh_pages/docs/4.3/examples/ -mindepth 1 -maxdepth 1 -type d -name "rtl-*" -exec bash -c \'rm -rf _gh_pages/docs/4.3/examples/$(basename "{}") ; rmdir _gh_pages/docs/4.3/examples/$(basename "{}")\' ;', (code, stdout, stderr) => {
    console.log('Exit code:', code)
    console.log('Program output:', stdout)
    console.log('Program stderr:', stderr)

    sh.exec('find _gh_pages/docs/4.3/examples/ -mindepth 1 -maxdepth 1 -type d ! -name "screenshots" -exec bash -c \'mkdir -p _gh_pages/docs/4.3/examples/rtl-$(basename "{}") ; cp -av "{}"/* _gh_pages/docs/4.3/examples/rtl-$(basename "{}")/ ; rtlcss -e "-rtl.css" -d _gh_pages/docs/4.3/examples/rtl-$(basename "{}")/\' ;', (code, stdout, stderr) => {
      console.log('Exit code:', code)
      console.log('Program output:', stdout)
      console.log('Program stderr:', stderr)
      sh.exec('find _gh_pages/docs/4.3/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/\\.css/-rtl\\.css/gi\' {} ;', (code, stdout, stderr) => {
        console.log('Exit code:', code)
        console.log('Program output:', stdout)
        console.log('Program stderr:', stderr)
        sh.exec('find _gh_pages/docs/4.3/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/orangeIcons-rtl/orangeIcons/gi\' {} ;', (code, stdout, stderr) => {
          console.log('Exit code:', code)
          console.log('Program output:', stdout)
          console.log('Program stderr:', stderr)
          sh.exec('find _gh_pages/docs/4.3/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/orangeHelvetica-rtl/orangeHelvetica/gi\' {} ;', (code, stdout, stderr) => {
            console.log('Exit code:', code)
            console.log('Program output:', stdout)
            console.log('Program stderr:', stderr)
            sh.exec('find _gh_pages/docs/4.3/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/swiper\\.min-rtl/swiper\\.min/gi\' {} ;', (code, stdout, stderr) => {
              console.log('Exit code:', code)
              console.log('Program output:', stdout)
              console.log('Program stderr:', stderr)
              sh.exec('find _gh_pages/docs/4.3/examples/rtl-* -type f -name "*.html" -exec sed -i \'s/html lang="en"/html lang="en" dir="rtl"/gi\' {} ;', (code, stdout, stderr) => {
                console.log('Exit code:', code)
                console.log('Program output:', stdout)
                console.log('Program stderr:', stderr)
              })
            })
          })
        })
      })
    })
  })
}
