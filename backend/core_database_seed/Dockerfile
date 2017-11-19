FROM mongo

WORKDIR /var/dmongo
COPY mock_data.json /var/dmongo
COPY mock_user.json /var/dmongo
CMD mongoimport --host core_database -d core -c courses --type json --file /var/dmongo/mock_data.json --jsonArray && mongoimport --host core_database -d core -c users --type json --file /var/dmongo/mock_user.json --jsonArray