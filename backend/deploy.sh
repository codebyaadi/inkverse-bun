echo "Starting deployment process..."

# Check if Docker is installed
if ! [ -x "$(command -v docker)" ]; then
  echo "Error: Docker is not installed." >&2
  exit 1
fi

# Build Docker image
echo "Building Docker image..."
docker build -t myproject:latest .

# Run Docker container
echo "Running Docker container..."
docker run -d -p 80:80 myproject:latest

# Check if Git is installed
if ! [ -x "$(command -v git)" ]; then
  echo "Error: Git is not installed." >&2
  exit 1
fi

# Push changes to GitHub
echo "Pushing changes to GitHub..."
git add .
git commit -m "Deploying project"
git push origin master

echo "Deployment process finished."
