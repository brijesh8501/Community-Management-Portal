# Use official PHP image with Apache web server (pinned to major/minor for reliability)
FROM php:8.5.9-apache

# Install system dependencies & required PHP extensions for MySQL
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    zip \
    unzip \
    git \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) gd pdo pdo_mysql mysqli \
    && rm -rf /var/lib/apt/lists/*

# Enable Apache mod_rewrite for clean URLs / custom MVC routing
RUN a2enmod rewrite

# Set working directory to Apache's default web root
WORKDIR /var/www/html

# Copy your existing PHP source code into the container
COPY . /var/www/html/

# Adjust permissions for Apache's web user
RUN chown -R www-data:www-data /var/www/html \
    && chmod -R 755 /var/www/html