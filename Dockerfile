FROM php:apache

# Install dependencies
RUN apt-get update \
    && apt-get install -y git zip unzip

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

COPY . .
WORKDIR /var/www/html

# Install PHPMailer using Composer
RUN composer require phpmailer/phpmailer
