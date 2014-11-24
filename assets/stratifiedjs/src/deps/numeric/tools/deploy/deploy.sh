#!/bin/bash
set -e
cd `dirname $0`
source config.sh
echo Fetching staging copy...
curl $server/staging/ > staging-copy.html
if grep Loisel staging-copy.html > /dev/null; then
    echo "Fetched."
else
    echo "Staging copy does not work!"
    exit 1
fi
echo Deploying...
ssh $server -l $user "( cd $webroot && [ -L staging ] && foo=\`readlink staging\` && rm -f numeric && ln -s \$foo numeric && rm -f staging && numeric/tools/deploy/clean.sh && echo Deployment successful. ) || echo FAIL: Deployment unsuccessful."
echo Comparing staging copy with live copy...
curl http://$server/ > live-copy.html
if diff staging-copy.html live-copy.html >/dev/null; then
    echo Staging and live copies match.
else
    echo FAIL: Staging and live copies do not match.
    exit 1
fi
rm -f staging-copy.html live-copy.html
echo Testing live links
cd ..
pwd
python ./selenium_links.py Firefox http://$server/
cd deploy
python selenium_basic.py Firefox http://$server/
