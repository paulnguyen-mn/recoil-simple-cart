# Build project
npm run build

# Move to build folder 
cd build

# Clone index.html --> 200.html (support fallback for surge)
cp ./index.html ./200.html

# Start deploying
surge . https://paul-simple-cart.surge.sh
