export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
      password: process.env.DATABASE_PASSWORD,
      user: process.env.DATABASE_USER,
      name: process.env.DATABASE_NAME,
    },
    // rabbitMQ: {
    //   user: process.env.RABBITMQ_USER,
    //   password: process.env.RABBITMQ_PASSWORD,
    //   host: process.env.RABBITMQ_HOST,
    //   port: process.env.RABBITMQ_PORT,
    //   vhost: process.env.RABBITMQ_VHOST,
    //   queue: process.env.RABBITMQ_QUEUE
    // }
  });