# Dev generates a testem.js file

ember build\
    -o ./../../../Dondevanmisimpuestos/soft/dondevanmisimpuestos-red/assets \
&& rm ./../../../Dondevanmisimpuestos/soft/dondevanmisimpuestos-red/assets/index.html \
&& rm ./../../../Dondevanmisimpuestos/soft/dondevanmisimpuestos-red/assets/crossdomain.xml \
&& rm ./../../../Dondevanmisimpuestos/soft/dondevanmisimpuestos-red/assets/testem.js \
&& rm ./../../../Dondevanmisimpuestos/soft/dondevanmisimpuestos-red/assets/robots.txt \
&& rm -rf ./../../../Dondevanmisimpuestos/soft/dondevanmisimpuestos-red/assets/tests \
&& mv ./../../../Dondevanmisimpuestos/soft/dondevanmisimpuestos-red/assets/assets/* \
    ./../../../Dondevanmisimpuestos/soft/dondevanmisimpuestos-red/assets \
&& rm -rf ./../../../Dondevanmisimpuestos/soft/dondevanmisimpuestos-red/assets/assets
