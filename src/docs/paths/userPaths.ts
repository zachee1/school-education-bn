export default {
  '/api/signup': {
    post: {
      summary: 'User Signup',
      tags: ['Auth'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                firstName: {
                  type: 'string',
                  example: 'John'
                },
                lastName: {
                  type: 'string',
                  example: 'Doe'
                },
                role: {
                  type: 'string',
                  example: 'user'
                },
                email: {
                  type: 'string',
                  example: 'john.doe@example.com'
                },
                password: {
                  type: 'string',
                  example: 'StrongPassword123'
                }
              }
            }
          }
        },
        required: true
      },
      responses: {
        201: {
          description: 'Token has been created successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'string',
                    example: 'success'
                  },
                  message: {
                    type: 'string',
                    example: 'Token has been created successfully'
                  },
                  token: {
                    type: 'string'
                  }
                }
              }
            }
          }
        },
        400: {
          description: 'Bad Request'
        },
        500: {
          description: 'Internal Server Error'
        }
      }
    }
  },
  '/api/login': {
    post: {
      summary: 'User Login',
      tags: ['Auth'],
      requestBody: {
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                email: {
                  type: 'string',
                  example: 'john.doe@example.com'
                },
                password: {
                  type: 'string',
                  example: 'StrongPassword123'
                }
              }
            }
          }
        },
        required: true
      },
      responses: {
        201: {
          description: 'Token has been created successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'string',
                    example: 'success'
                  },
                  message: {
                    type: 'string',
                    example: 'Token has been created successfully'
                  },
                  token: {
                    type: 'string'
                  }
                }
              }
            }
          }
        },
        400: {
          description: 'Bad Request'
        },
        500: {
          description: 'Internal Server Error'
        }
      }
    }
  },
  '/api/users': {
    get: {
      summary: 'Get All Users',
      tags: ['Auth'],
      security: [
        {
          BearerAuth: []
        }
      ],
      responses: {
        200: {
          description: 'Users listed successfully',
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  status: {
                    type: 'string',
                    example: 'success'
                  },
                  message: {
                    type: 'string',
                    example: 'Users listed successfully'
                  },
                  users: {
                    type: 'array',
                    items: {
                      type: 'object',
                      properties: {
                        // Define properties of a user
                        id: {
                          type: 'string',
                          example: '123456789'
                        },
                        firstName: {
                          type: 'string',
                          example: 'John'
                        },
                        lastName: {
                          type: 'string',
                          example: 'Doe'
                        },
                        email: {
                          type: 'string',
                          example: 'john.doe@example.com'
                        },
                        role: {
                          type: 'string',
                          example: 'user'
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        401: {
          description: 'Unauthorized'
        },
        500: {
          description: 'Internal Server Error'
        }
      }
    }
  }
};
