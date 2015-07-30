#!/bin/bash

current=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
browserify=../../../node_modules/browserify/bin/cmd.js
babelify=../../../node_modules/babelify/index.js
jadeify=../../../node_modules/jadeify/lib/jadeify.js
stylus=../../../node_modules/stylus/bin/stylus
autoprefixer=../../../node_modules/autoprefixer-stylus
mixins=../../../node_modules/stylus-mixins
bower=../../../node_modules/bower/bin/bower

cd $current
echo "Installing application packages"
npm install --quit

for file in app/packages/*
do

  cd $current

  pkg=${file/app\/packages\/}
  src=./assets/src
  dist=./assets/dist
  inarray=0

  if test "$1" == "all"; then
    inarray=1
  else
    for p in "$@"
    do
      if test "$p" == "$pkg"; then
        inarray=1
        break
      fi
    done
  fi

  if test "$inarray" == "1"; then

    # Cleaning
    rm -rf $file/assets/dist
    mkdir $file/assets/dist

    echo "Installing" $pkg
    cd $file
    npm install --quiet
    $bower install --quiet

    # Coping vendor folder
    if [ -d $src/vendor ]; then
      cp -rf $src/vendor $dist/vendor
    fi

    # Compiling admin
    if [ -d $src/admin ]; then
      mkdir $dist/admin

      if [ -d $src/admin/img ]; then
        cp -rf $src/admin/img $dist/admin/img
      fi

      if [ -d $src/admin/js ]; then
        $browserify $src/admin/js/index.js -t $babelify -t $jadeify --outfile $dist/admin/index.js
      fi

      if [ -d $src/admin/styl ]; then
        $stylus $src/admin/styl/index.styl -o $dist/admin/index.css -u $autoprefixer -u $mixins
      fi

    fi

    # Compiling site
    if [ -d $src/site ]; then
      mkdir $dist/site

      if [ -d $src/site/img ]; then
        cp -rf $src/site/img $dist/site/img
      fi

      if [ -d $src/site/js ]; then
        $browserify $src/site/js/index.js -t $babelify --outfile $dist/site/index.js
      fi

      if [ -d $src/site/styl ]; then
        $stylus $src/site/styl/index.styl -o $dist/site/index.css -u $autoprefixer -u $mixins
      fi
    fi

  fi

done
