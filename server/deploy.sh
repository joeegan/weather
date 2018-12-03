./dockerBuild.sh;
heroku container:push web --app weather-marshfield;
heroku container:release web --app weather-marshfield;