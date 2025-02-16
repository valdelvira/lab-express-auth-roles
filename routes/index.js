module.exports = (app) => {
  // Base routes
  const indexRouter = require('./index.routes')
  app.use('/', indexRouter)

  // Auth routes
  const authRouter = require('./auth.routes')
  app.use('/', authRouter)

  // Students routes
  const studentRouter = require('./student.routes')
  app.use('/', studentRouter)

  // Courses routes
  // const courseRouter = require('./course.routes')
  // app.use('/', courseRouter)
}
