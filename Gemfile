source 'https://rubygems.org'

gem 'jekyll-paginate'
gem 'jekyll-assets', '<3.0'

require 'rbconfig'
# if RbConfig::CONFIG['target_os'] =~ /darwin(1[0-3])/i
#   gem 'rb-fsevent', '<= 0.9.4'
# end
group :development, :test do
  group :darwin do
    gem 'rb-fsevent', :require => false
    gem 'guard-pow', :require => false
  end
end