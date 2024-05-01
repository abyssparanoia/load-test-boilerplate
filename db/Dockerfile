FROM mysql:8.4

ADD ./my.cnf /etc/mysql/conf.d/my.cnf

RUN chown -R mysql /var/lib/mysql && \
    chgrp -R mysql /var/lib/mysql