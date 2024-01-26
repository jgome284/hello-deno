# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

# Deno version 1.40.0, Debian GNU/Linux 12 (bookworm)
FROM denoland/deno:debian-1.40.0 as development

# Set the working directory in the container
WORKDIR /usr/app

# Update the system and install necessary packages
    # This command updates the package lists for the APT (Advanced Package Tool) package manager. 
    # It fetches the latest information about available packages from the configured repositories.
RUN apt-get update && \
    apt-get upgrade -y && \
    # Install git for version control
    apt-get install -y git && \
    # Install python3
    apt-get install python3 python3-pip python3-venv -y && \
    # Install tools that are required to compiling C software from source
    apt-get install build-essential libssl-dev libffi-dev python3-dev -y

# Create python virtual environment: venv
RUN python3 -m venv /root/.virtualenvs/venv 

# Enable venv
ENV PATH="/root/.virtualenvs/venv/bin:$PATH"

# Prevents Python from writing pyc files.
ENV PYTHONDONTWRITEBYTECODE=1

# Keeps Python from buffering stdout and stderr to avoid situations where
# the application crashes without emitting any logs due to buffering.
ENV PYTHONUNBUFFERED=1

# Upgrade pip in venv
RUN pip install --upgrade pip

# Install python dependencies in virtual environment for build
RUN --mount=type=bind,source=requirements.txt,target=requirements.txt \
    python3 -m pip install -r requirements.txt

# Force install the deno jupyter kernal
RUN deno jupyter --unstable --install

# Make port 80 available to the world outside this container
EXPOSE 80

# Check deno version when the container launches
CMD ["deno, -v"]
