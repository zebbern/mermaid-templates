import { 
  GitBranch, 
  ArrowRightLeft, 
  Boxes, 
  RefreshCw, 
  BarChart3, 
  Database, 
  PieChart, 
  Network,
  GitGraph,
  type LucideIcon
} from 'lucide-react';

export interface Template {
  id: string;
  title: string;
  description: string;
  category: string;
  code: string;
}

export interface Category {
  id: string;
  name: string;
  icon: LucideIcon;
  count: number;
}

export const categories: Category[] = [
  { id: 'flowchart', name: 'Flowchart', icon: GitBranch, count: 41 },
  { id: 'sequence', name: 'Sequence', icon: ArrowRightLeft, count: 36 },
  { id: 'class', name: 'Class Diagram', icon: Boxes, count: 31 },
  { id: 'state', name: 'State Diagram', icon: RefreshCw, count: 27 },
  { id: 'gantt', name: 'Gantt Chart', icon: BarChart3, count: 23 },
  { id: 'er', name: 'ER Diagram', icon: Database, count: 30 },
  { id: 'pie', name: 'Pie Chart', icon: PieChart, count: 16 },
  { id: 'mindmap', name: 'Mindmap', icon: Network, count: 26 },
  { id: 'git', name: 'Git Graph', icon: GitGraph, count: 16 },
];

export const templates: Template[] = [
  // =============================================
  // FLOWCHARTS (25 templates)
  // =============================================
  {
    id: 'flowchart-basic',
    title: 'Basic Flowchart',
    description: 'Simple start-to-end process flow',
    category: 'flowchart',
    code: `flowchart TD
    A[Start] --> B{Decision}
    B -->|Yes| C[Action 1]
    B -->|No| D[Action 2]
    C --> E[End]
    D --> E`
  },
  {
    id: 'flowchart-decision-tree',
    title: 'Decision Tree',
    description: 'Multi-level decision making flow',
    category: 'flowchart',
    code: `flowchart TD
    A[Start] --> B{Is it working?}
    B -->|Yes| C[Don't touch it]
    B -->|No| D{Did you mess with it?}
    D -->|Yes| E[Fix it]
    D -->|No| F{Does anyone know?}
    F -->|Yes| G[Ask for help]
    F -->|No| H[Hide the problem]
    C --> I[End]
    E --> I
    G --> I
    H --> I`
  },
  {
    id: 'flowchart-process',
    title: 'Process Flow',
    description: 'Step-by-step process with validation',
    category: 'flowchart',
    code: `flowchart LR
    A[Input] --> B[Process 1]
    B --> C[Process 2]
    C --> D{Validate}
    D -->|Pass| E[Output]
    D -->|Fail| F[Error Handler]
    F --> B`
  },
  {
    id: 'flowchart-subgraph',
    title: 'Grouped Subgraphs',
    description: 'Flowchart with subgraphs for organization',
    category: 'flowchart',
    code: `flowchart TB
    subgraph Frontend
        A[User Interface] --> B[API Client]
    end
    subgraph Backend
        C[API Server] --> D[Business Logic]
        D --> E[Database]
    end
    B --> C`
  },
  {
    id: 'flowchart-ci-cd',
    title: 'CI/CD Pipeline',
    description: 'Continuous integration and deployment flow',
    category: 'flowchart',
    code: `flowchart LR
    A[Code Push] --> B[Build]
    B --> C[Unit Tests]
    C --> D{Tests Pass?}
    D -->|Yes| E[Deploy Staging]
    D -->|No| F[Notify Dev]
    E --> G[Integration Tests]
    G --> H{All Pass?}
    H -->|Yes| I[Deploy Prod]
    H -->|No| F`
  },
  {
    id: 'flowchart-user-journey',
    title: 'E-commerce Checkout',
    description: 'User checkout flow',
    category: 'flowchart',
    code: `flowchart TD
    A[Browse Products] --> B[Add to Cart]
    B --> C{Logged In?}
    C -->|Yes| D[Checkout]
    C -->|No| E[Login/Register]
    E --> D
    D --> F[Enter Shipping]
    F --> G[Select Payment]
    G --> H[Confirm Order]
    H --> I[Order Complete]`
  },
  {
    id: 'flowchart-login',
    title: 'Login Flow',
    description: 'User authentication process',
    category: 'flowchart',
    code: `flowchart TD
    A[Enter Credentials] --> B{Valid?}
    B -->|No| C[Show Error]
    C --> A
    B -->|Yes| D{2FA Enabled?}
    D -->|No| E[Dashboard]
    D -->|Yes| F[Enter 2FA Code]
    F --> G{Code Valid?}
    G -->|Yes| E
    G -->|No| H[Retry]
    H --> F`
  },
  {
    id: 'flowchart-error-handling',
    title: 'Error Handling',
    description: 'Try-catch error handling pattern',
    category: 'flowchart',
    code: `flowchart TD
    A[Start] --> B[Try Block]
    B --> C{Error?}
    C -->|No| D[Success]
    C -->|Yes| E[Catch Block]
    E --> F{Recoverable?}
    F -->|Yes| G[Retry]
    G --> B
    F -->|No| H[Log Error]
    H --> I[Graceful Exit]
    D --> J[End]
    I --> J`
  },
  {
    id: 'flowchart-api-request',
    title: 'API Request Handler',
    description: 'REST API request processing',
    category: 'flowchart',
    code: `flowchart LR
    A[Request] --> B[Authenticate]
    B --> C{Auth OK?}
    C -->|No| D[401 Error]
    C -->|Yes| E[Validate]
    E --> F{Valid?}
    F -->|No| G[400 Error]
    F -->|Yes| H[Process]
    H --> I[Response]`
  },
  {
    id: 'flowchart-order-processing',
    title: 'Order Processing',
    description: 'Order fulfillment workflow',
    category: 'flowchart',
    code: `flowchart TD
    A[New Order] --> B[Validate Payment]
    B --> C{Payment OK?}
    C -->|No| D[Cancel Order]
    C -->|Yes| E[Check Inventory]
    E --> F{In Stock?}
    F -->|No| G[Backorder]
    F -->|Yes| H[Pack Items]
    G --> H
    H --> I[Ship]
    I --> J[Delivered]`
  },
  {
    id: 'flowchart-support-ticket',
    title: 'Support Ticket Flow',
    description: 'Customer support ticket lifecycle',
    category: 'flowchart',
    code: `flowchart TD
    A[Ticket Created] --> B[Assign Agent]
    B --> C[Investigate]
    C --> D{Resolved?}
    D -->|No| E{Escalate?}
    E -->|Yes| F[Escalate Tier 2]
    F --> C
    E -->|No| G[Request Info]
    G --> C
    D -->|Yes| H[Close Ticket]`
  },
  {
    id: 'flowchart-data-pipeline',
    title: 'Data Pipeline',
    description: 'ETL data processing flow',
    category: 'flowchart',
    code: `flowchart LR
    subgraph Extract
        A[Source DB] --> B[Query Data]
    end
    subgraph Transform
        B --> C[Clean]
        C --> D[Validate]
        D --> E[Transform]
    end
    subgraph Load
        E --> F[Target DB]
    end`
  },
  {
    id: 'flowchart-deployment',
    title: 'Deployment Pipeline',
    description: 'Application deployment stages',
    category: 'flowchart',
    code: `flowchart LR
    A[Build] --> B[Test]
    B --> C[Staging]
    C --> D[QA Review]
    D --> E{Approved?}
    E -->|Yes| F[Production]
    E -->|No| G[Fix Issues]
    G --> A`
  },
  {
    id: 'flowchart-file-upload',
    title: 'File Upload Flow',
    description: 'File upload and processing',
    category: 'flowchart',
    code: `flowchart TD
    A[Select File] --> B{Valid Type?}
    B -->|No| C[Show Error]
    B -->|Yes| D{Size OK?}
    D -->|No| C
    D -->|Yes| E[Upload]
    E --> F[Process]
    F --> G[Store]
    G --> H[Return URL]`
  },
  {
    id: 'flowchart-review-process',
    title: 'Code Review Process',
    description: 'Pull request review workflow',
    category: 'flowchart',
    code: `flowchart TD
    A[Create PR] --> B[Automated Tests]
    B --> C{Tests Pass?}
    C -->|No| D[Fix Code]
    D --> A
    C -->|Yes| E[Request Review]
    E --> F{Approved?}
    F -->|No| G[Address Feedback]
    G --> E
    F -->|Yes| H[Merge]`
  },
  {
    id: 'flowchart-user-registration',
    title: 'User Registration',
    description: 'Account creation flow',
    category: 'flowchart',
    code: `flowchart TD
    A[Enter Details] --> B{Email Valid?}
    B -->|No| C[Show Error]
    B -->|Yes| D{Password Strong?}
    D -->|No| C
    D -->|Yes| E[Create Account]
    E --> F[Send Verification]
    F --> G[User Verifies]
    G --> H[Account Active]`
  },
  {
    id: 'flowchart-search',
    title: 'Search Flow',
    description: 'Search functionality with caching',
    category: 'flowchart',
    code: `flowchart LR
    A[Search Query] --> B{In Cache?}
    B -->|Yes| C[Return Cached]
    B -->|No| D[Search DB]
    D --> E[Cache Results]
    E --> F[Return Results]
    C --> F`
  },
  {
    id: 'flowchart-payment',
    title: 'Payment Processing',
    description: 'Payment gateway integration',
    category: 'flowchart',
    code: `flowchart TD
    A[Checkout] --> B[Select Method]
    B --> C{Credit Card?}
    C -->|Yes| D[Enter Card Info]
    C -->|No| E[PayPal/Other]
    D --> F[Validate]
    E --> F
    F --> G{Valid?}
    G -->|No| H[Retry]
    G -->|Yes| I[Process Payment]
    I --> J[Confirm]`
  },
  {
    id: 'flowchart-notification',
    title: 'Notification System',
    description: 'Multi-channel notification flow',
    category: 'flowchart',
    code: `flowchart TD
    A[Event Triggered] --> B{Preferences}
    B --> C[Email]
    B --> D[Push]
    B --> E[SMS]
    C --> F[Queue]
    D --> F
    E --> F
    F --> G[Send]
    G --> H[Track Delivery]`
  },
  {
    id: 'flowchart-backup',
    title: 'Backup Process',
    description: 'Automated backup workflow',
    category: 'flowchart',
    code: `flowchart LR
    A[Schedule] --> B[Full/Incremental?]
    B -->|Full| C[Full Backup]
    B -->|Incremental| D[Incremental]
    C --> E[Compress]
    D --> E
    E --> F[Encrypt]
    F --> G[Upload Cloud]
    G --> H[Verify]
    H --> I[Log Success]`
  },
  {
    id: 'flowchart-simple-loop',
    title: 'Simple Loop',
    description: 'Basic loop structure',
    category: 'flowchart',
    code: `flowchart TD
    A[Start] --> B[Initialize i=0]
    B --> C{i < 10?}
    C -->|Yes| D[Process]
    D --> E[i++]
    E --> C
    C -->|No| F[End]`
  },
  {
    id: 'flowchart-parallel',
    title: 'Parallel Processing',
    description: 'Concurrent task execution',
    category: 'flowchart',
    code: `flowchart TD
    A[Start] --> B[Split Tasks]
    B --> C[Task 1]
    B --> D[Task 2]
    B --> E[Task 3]
    C --> F[Join]
    D --> F
    E --> F
    F --> G[Merge Results]
    G --> H[End]`
  },
  {
    id: 'flowchart-conditional',
    title: 'Multiple Conditions',
    description: 'Switch-case style branching',
    category: 'flowchart',
    code: `flowchart TD
    A[Input] --> B{Type?}
    B -->|Type A| C[Handle A]
    B -->|Type B| D[Handle B]
    B -->|Type C| E[Handle C]
    B -->|Default| F[Handle Default]
    C --> G[Output]
    D --> G
    E --> G
    F --> G`
  },
  {
    id: 'flowchart-microservices',
    title: 'Microservices Architecture',
    description: 'Service communication pattern',
    category: 'flowchart',
    code: `flowchart TB
    subgraph Gateway
        A[API Gateway]
    end
    subgraph Services
        B[User Service]
        C[Order Service]
        D[Product Service]
    end
    subgraph Data
        E[(User DB)]
        F[(Order DB)]
        G[(Product DB)]
    end
    A --> B
    A --> C
    A --> D
    B --> E
    C --> F
    D --> G`
  },
  {
    id: 'flowchart-retry-pattern',
    title: 'Retry Pattern',
    description: 'Exponential backoff retry',
    category: 'flowchart',
    code: `flowchart TD
    A[Request] --> B{Success?}
    B -->|Yes| C[Return Result]
    B -->|No| D{Retries Left?}
    D -->|No| E[Return Error]
    D -->|Yes| F[Wait/Backoff]
    F --> G[Retry Count++]
    G --> A`
  },

  // =============================================
  // SEQUENCE DIAGRAMS (20 templates)
  // =============================================
  {
    id: 'sequence-auth',
    title: 'User Authentication',
    description: 'Login flow with token exchange',
    category: 'sequence',
    code: `sequenceDiagram
    actor User
    participant App
    participant Auth
    participant DB
    
    User->>App: Enter credentials
    App->>Auth: POST /login
    Auth->>DB: Validate user
    DB-->>Auth: User found
    Auth-->>App: JWT Token
    App-->>User: Login success`
  },
  {
    id: 'sequence-api',
    title: 'REST API Call',
    description: 'Typical API request/response cycle',
    category: 'sequence',
    code: `sequenceDiagram
    participant Client
    participant API
    participant Cache
    participant DB
    
    Client->>API: GET /users/123
    API->>Cache: Check cache
    alt Cache Hit
        Cache-->>API: Return cached
    else Cache Miss
        API->>DB: Query user
        DB-->>API: User data
        API->>Cache: Store in cache
    end
    API-->>Client: JSON Response`
  },
  {
    id: 'sequence-microservice',
    title: 'Microservices Communication',
    description: 'Inter-service messaging pattern',
    category: 'sequence',
    code: `sequenceDiagram
    participant Order
    participant Payment
    participant Inventory
    participant Notify
    
    Order->>Payment: Process payment
    Payment-->>Order: Confirmed
    Order->>Inventory: Reserve items
    Inventory-->>Order: Reserved
    par Notifications
        Order->>Notify: Send email
        Order->>Notify: Send SMS
    end`
  },
  {
    id: 'sequence-websocket',
    title: 'WebSocket Connection',
    description: 'Real-time bidirectional communication',
    category: 'sequence',
    code: `sequenceDiagram
    participant Client
    participant Server
    
    Client->>Server: WS Handshake
    Server-->>Client: Connected
    loop Real-time
        Server-->>Client: Push data
        Client->>Server: Acknowledge
    end
    Client->>Server: Close
    Server-->>Client: Closed`
  },
  {
    id: 'sequence-oauth',
    title: 'OAuth 2.0 Flow',
    description: 'Third-party authentication',
    category: 'sequence',
    code: `sequenceDiagram
    actor User
    participant App
    participant OAuth
    participant Resource
    
    User->>App: Login with Google
    App->>OAuth: Redirect to auth
    OAuth->>User: Login prompt
    User->>OAuth: Enter credentials
    OAuth-->>App: Auth code
    App->>OAuth: Exchange code
    OAuth-->>App: Access token
    App->>Resource: API call + token
    Resource-->>App: Protected data`
  },
  {
    id: 'sequence-checkout',
    title: 'E-commerce Checkout',
    description: 'Order placement flow',
    category: 'sequence',
    code: `sequenceDiagram
    actor Customer
    participant Cart
    participant Order
    participant Payment
    participant Fulfillment
    
    Customer->>Cart: Checkout
    Cart->>Order: Create order
    Order->>Payment: Charge card
    Payment-->>Order: Success
    Order->>Fulfillment: Ship items
    Fulfillment-->>Customer: Confirmation`
  },
  {
    id: 'sequence-error',
    title: 'Error Handling',
    description: 'API error response flow',
    category: 'sequence',
    code: `sequenceDiagram
    participant Client
    participant API
    participant Service
    
    Client->>API: Request
    API->>Service: Process
    Service--xAPI: Error
    Note right of API: Log error
    API-->>Client: 500 Error
    Client->>Client: Show message`
  },
  {
    id: 'sequence-caching',
    title: 'Cache Strategy',
    description: 'Read-through caching pattern',
    category: 'sequence',
    code: `sequenceDiagram
    participant App
    participant Cache
    participant DB
    
    App->>Cache: Get data
    alt Hit
        Cache-->>App: Return data
    else Miss
        Cache->>DB: Query
        DB-->>Cache: Result
        Cache->>Cache: Store
        Cache-->>App: Return data
    end`
  },
  {
    id: 'sequence-pub-sub',
    title: 'Publish-Subscribe',
    description: 'Event-driven messaging',
    category: 'sequence',
    code: `sequenceDiagram
    participant Publisher
    participant Broker
    participant Sub1
    participant Sub2
    
    Publisher->>Broker: Publish event
    Broker->>Sub1: Deliver
    Broker->>Sub2: Deliver
    Sub1-->>Broker: Ack
    Sub2-->>Broker: Ack`
  },
  {
    id: 'sequence-saga',
    title: 'Saga Pattern',
    description: 'Distributed transaction',
    category: 'sequence',
    code: `sequenceDiagram
    participant Orchestrator
    participant Order
    participant Payment
    participant Inventory
    
    Orchestrator->>Order: Create
    Order-->>Orchestrator: OK
    Orchestrator->>Payment: Charge
    Payment--xOrchestrator: Failed
    Orchestrator->>Order: Rollback
    Order-->>Orchestrator: Cancelled`
  },
  {
    id: 'sequence-file-upload',
    title: 'File Upload',
    description: 'Multipart file upload flow',
    category: 'sequence',
    code: `sequenceDiagram
    actor User
    participant Browser
    participant API
    participant Storage
    
    User->>Browser: Select file
    Browser->>API: Upload multipart
    API->>API: Validate
    API->>Storage: Store file
    Storage-->>API: URL
    API-->>Browser: Success + URL
    Browser-->>User: Show preview`
  },
  {
    id: 'sequence-graphql',
    title: 'GraphQL Query',
    description: 'GraphQL request resolution',
    category: 'sequence',
    code: `sequenceDiagram
    participant Client
    participant GraphQL
    participant Resolver
    participant DB
    
    Client->>GraphQL: Query
    GraphQL->>Resolver: user(id)
    Resolver->>DB: SELECT user
    DB-->>Resolver: Row
    Resolver->>Resolver: posts(userId)
    Resolver->>DB: SELECT posts
    DB-->>Resolver: Rows
    Resolver-->>GraphQL: Combined
    GraphQL-->>Client: JSON`
  },
  {
    id: 'sequence-circuit-breaker',
    title: 'Circuit Breaker',
    description: 'Fault tolerance pattern',
    category: 'sequence',
    code: `sequenceDiagram
    participant Client
    participant Breaker
    participant Service
    
    Client->>Breaker: Request
    alt Closed
        Breaker->>Service: Forward
        Service-->>Breaker: Response
        Breaker-->>Client: Success
    else Open
        Breaker-->>Client: Fallback
    end`
  },
  {
    id: 'sequence-rate-limit',
    title: 'Rate Limiting',
    description: 'API rate limit enforcement',
    category: 'sequence',
    code: `sequenceDiagram
    participant Client
    participant RateLimiter
    participant API
    
    Client->>RateLimiter: Request
    RateLimiter->>RateLimiter: Check quota
    alt Within limit
        RateLimiter->>API: Forward
        API-->>Client: 200 OK
    else Exceeded
        RateLimiter-->>Client: 429 Too Many
    end`
  },
  {
    id: 'sequence-batch',
    title: 'Batch Processing',
    description: 'Bulk operation handling',
    category: 'sequence',
    code: `sequenceDiagram
    participant Scheduler
    participant Worker
    participant Queue
    participant DB
    
    Scheduler->>Queue: Add batch
    loop Process Items
        Worker->>Queue: Get item
        Worker->>DB: Process
        DB-->>Worker: Done
        Worker->>Queue: Ack
    end
    Worker-->>Scheduler: Complete`
  },
  {
    id: 'sequence-sse',
    title: 'Server-Sent Events',
    description: 'Real-time server push',
    category: 'sequence',
    code: `sequenceDiagram
    participant Browser
    participant Server
    participant Event
    
    Browser->>Server: EventSource connect
    Server-->>Browser: Connection open
    loop Events
        Event->>Server: New data
        Server-->>Browser: Push event
    end
    Browser->>Server: Close`
  },
  {
    id: 'sequence-2fa',
    title: 'Two-Factor Auth',
    description: '2FA verification flow',
    category: 'sequence',
    code: `sequenceDiagram
    actor User
    participant App
    participant Auth
    participant SMS
    
    User->>App: Login
    App->>Auth: Verify password
    Auth-->>App: Valid
    App->>SMS: Send code
    SMS-->>User: OTP
    User->>App: Enter code
    App->>Auth: Verify OTP
    Auth-->>App: Success
    App-->>User: Logged in`
  },
  {
    id: 'sequence-grpc',
    title: 'gRPC Call',
    description: 'RPC communication',
    category: 'sequence',
    code: `sequenceDiagram
    participant Client
    participant LoadBalancer
    participant Server1
    participant Server2
    
    Client->>LoadBalancer: gRPC Request
    LoadBalancer->>Server1: Forward
    Server1-->>LoadBalancer: Response
    LoadBalancer-->>Client: Result`
  },
  {
    id: 'sequence-jwt-refresh',
    title: 'JWT Token Refresh',
    description: 'Access token renewal',
    category: 'sequence',
    code: `sequenceDiagram
    participant App
    participant API
    participant Auth
    
    App->>API: Request + Access Token
    API-->>App: 401 Expired
    App->>Auth: Refresh token
    Auth-->>App: New access token
    App->>API: Retry with new token
    API-->>App: 200 Success`
  },
  {
    id: 'sequence-email',
    title: 'Email Sending',
    description: 'Email delivery flow',
    category: 'sequence',
    code: `sequenceDiagram
    participant App
    participant Queue
    participant EmailService
    participant SMTP
    
    App->>Queue: Add email job
    Queue->>EmailService: Process
    EmailService->>SMTP: Send
    SMTP-->>EmailService: Delivered
    EmailService->>Queue: Mark complete`
  },

  // =============================================
  // CLASS DIAGRAMS (15 templates)
  // =============================================
  {
    id: 'class-inheritance',
    title: 'Class Inheritance',
    description: 'Basic OOP inheritance pattern',
    category: 'class',
    code: `classDiagram
    Animal <|-- Dog
    Animal <|-- Cat
    Animal : +String name
    Animal : +int age
    Animal : +makeSound()
    Dog : +String breed
    Dog : +fetch()
    Cat : +bool isIndoor
    Cat : +scratch()`
  },
  {
    id: 'class-interface',
    title: 'Interface Implementation',
    description: 'Interface with multiple implementations',
    category: 'class',
    code: `classDiagram
    class IPayment {
        <<interface>>
        +process(amount)
        +refund(id)
    }
    class CreditCard {
        +cardNumber
        +process(amount)
        +refund(id)
    }
    class PayPal {
        +email
        +process(amount)
        +refund(id)
    }
    IPayment <|.. CreditCard
    IPayment <|.. PayPal`
  },
  {
    id: 'class-composition',
    title: 'Composition Pattern',
    description: 'Has-a relationships between classes',
    category: 'class',
    code: `classDiagram
    class Car {
        +String model
        +start()
        +stop()
    }
    class Engine {
        +int horsepower
        +ignite()
    }
    class Wheel {
        +int size
        +rotate()
    }
    Car *-- Engine : has
    Car *-- "4" Wheel : has`
  },
  {
    id: 'class-abstract',
    title: 'Abstract Class',
    description: 'Abstract base with implementations',
    category: 'class',
    code: `classDiagram
    class Shape {
        <<abstract>>
        +color
        +area()*
        +perimeter()*
    }
    class Circle {
        +radius
        +area()
        +perimeter()
    }
    class Rectangle {
        +width
        +height
        +area()
        +perimeter()
    }
    Shape <|-- Circle
    Shape <|-- Rectangle`
  },
  {
    id: 'class-singleton',
    title: 'Singleton Pattern',
    description: 'Single instance design pattern',
    category: 'class',
    code: `classDiagram
    class Database {
        -static instance
        -connection
        -Database()
        +static getInstance()
        +query(sql)
        +close()
    }
    class Client {
        +execute()
    }
    Client --> Database : uses`
  },
  {
    id: 'class-factory',
    title: 'Factory Pattern',
    description: 'Object creation pattern',
    category: 'class',
    code: `classDiagram
    class Product {
        <<interface>>
        +operation()
    }
    class ProductA {
        +operation()
    }
    class ProductB {
        +operation()
    }
    class Factory {
        +createProduct(type)
    }
    Product <|.. ProductA
    Product <|.. ProductB
    Factory ..> Product : creates`
  },
  {
    id: 'class-observer',
    title: 'Observer Pattern',
    description: 'Event subscription pattern',
    category: 'class',
    code: `classDiagram
    class Subject {
        -observers
        +attach(observer)
        +detach(observer)
        +notify()
    }
    class Observer {
        <<interface>>
        +update()
    }
    class ConcreteObserver {
        +update()
    }
    Subject --> Observer
    Observer <|.. ConcreteObserver`
  },
  {
    id: 'class-strategy',
    title: 'Strategy Pattern',
    description: 'Interchangeable algorithms',
    category: 'class',
    code: `classDiagram
    class Context {
        -strategy
        +setStrategy(s)
        +execute()
    }
    class Strategy {
        <<interface>>
        +algorithm()
    }
    class StrategyA {
        +algorithm()
    }
    class StrategyB {
        +algorithm()
    }
    Context o-- Strategy
    Strategy <|.. StrategyA
    Strategy <|.. StrategyB`
  },
  {
    id: 'class-repository',
    title: 'Repository Pattern',
    description: 'Data access abstraction',
    category: 'class',
    code: `classDiagram
    class IRepository {
        <<interface>>
        +getById(id)
        +getAll()
        +add(entity)
        +update(entity)
        +delete(id)
    }
    class UserRepository {
        -db
        +getById(id)
        +getAll()
        +add(user)
        +update(user)
        +delete(id)
    }
    class User {
        +id
        +name
        +email
    }
    IRepository <|.. UserRepository
    UserRepository --> User`
  },
  {
    id: 'class-mvc',
    title: 'MVC Architecture',
    description: 'Model-View-Controller pattern',
    category: 'class',
    code: `classDiagram
    class Model {
        -data
        +getData()
        +setData()
    }
    class View {
        +render()
        +update()
    }
    class Controller {
        -model
        -view
        +handleInput()
        +updateView()
    }
    Controller --> Model
    Controller --> View
    View ..> Model : observes`
  },
  {
    id: 'class-builder',
    title: 'Builder Pattern',
    description: 'Step-by-step object construction',
    category: 'class',
    code: `classDiagram
    class Builder {
        <<interface>>
        +buildPartA()
        +buildPartB()
        +getResult()
    }
    class ConcreteBuilder {
        -product
        +buildPartA()
        +buildPartB()
        +getResult()
    }
    class Product {
        +partA
        +partB
    }
    class Director {
        -builder
        +construct()
    }
    Builder <|.. ConcreteBuilder
    Director --> Builder
    ConcreteBuilder --> Product`
  },
  {
    id: 'class-decorator',
    title: 'Decorator Pattern',
    description: 'Dynamic behavior extension',
    category: 'class',
    code: `classDiagram
    class Component {
        <<interface>>
        +operation()
    }
    class ConcreteComponent {
        +operation()
    }
    class Decorator {
        -component
        +operation()
    }
    class ConcreteDecorator {
        +operation()
        +addedBehavior()
    }
    Component <|.. ConcreteComponent
    Component <|.. Decorator
    Decorator <|-- ConcreteDecorator
    Decorator o-- Component`
  },
  {
    id: 'class-adapter',
    title: 'Adapter Pattern',
    description: 'Interface compatibility',
    category: 'class',
    code: `classDiagram
    class Target {
        <<interface>>
        +request()
    }
    class Adaptee {
        +specificRequest()
    }
    class Adapter {
        -adaptee
        +request()
    }
    class Client {
        +execute()
    }
    Target <|.. Adapter
    Adapter --> Adaptee
    Client --> Target`
  },
  {
    id: 'class-service-layer',
    title: 'Service Layer',
    description: 'Application service architecture',
    category: 'class',
    code: `classDiagram
    class UserService {
        -userRepo
        -emailService
        +createUser(data)
        +getUser(id)
        +updateUser(id, data)
    }
    class UserRepository {
        +save(user)
        +find(id)
    }
    class EmailService {
        +send(to, subject, body)
    }
    class User {
        +id
        +name
        +email
    }
    UserService --> UserRepository
    UserService --> EmailService
    UserRepository --> User`
  },
  {
    id: 'class-entity',
    title: 'Entity Relationships',
    description: 'Domain model relationships',
    category: 'class',
    code: `classDiagram
    class Order {
        +id
        +date
        +status
        +calculateTotal()
    }
    class OrderItem {
        +quantity
        +price
    }
    class Product {
        +name
        +sku
        +price
    }
    class Customer {
        +name
        +email
    }
    Customer "1" --> "*" Order
    Order "1" --> "*" OrderItem
    OrderItem "*" --> "1" Product`
  },

  // =============================================
  // STATE DIAGRAMS (12 templates)
  // =============================================
  {
    id: 'state-order',
    title: 'Order Status',
    description: 'E-commerce order state machine',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Pending
    Pending --> Processing : Payment
    Processing --> Shipped : Packed
    Shipped --> Delivered : Arrived
    Delivered --> [*]
    
    Processing --> Cancelled : Cancel
    Pending --> Cancelled : Cancel
    Cancelled --> [*]`
  },
  {
    id: 'state-traffic',
    title: 'Traffic Light',
    description: 'Simple state machine example',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Red
    Red --> Green : Timer
    Green --> Yellow : Timer
    Yellow --> Red : Timer`
  },
  {
    id: 'state-auth',
    title: 'Authentication State',
    description: 'User authentication state flow',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> LoggedOut
    LoggedOut --> Authenticating : Login
    Authenticating --> LoggedIn : Success
    Authenticating --> LoggedOut : Failure
    LoggedIn --> LoggedOut : Logout
    LoggedIn --> Expired : Timeout
    Expired --> LoggedOut : Redirect`
  },
  {
    id: 'state-document',
    title: 'Document Workflow',
    description: 'Document approval states',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Draft
    Draft --> Review : Submit
    Review --> Approved : Approve
    Review --> Draft : Reject
    Approved --> Published : Publish
    Published --> Archived : Archive
    Archived --> [*]`
  },
  {
    id: 'state-task',
    title: 'Task States',
    description: 'Project task lifecycle',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Backlog
    Backlog --> Todo : Prioritize
    Todo --> InProgress : Start
    InProgress --> Review : Complete
    Review --> Done : Approve
    Review --> InProgress : Rework
    Done --> [*]`
  },
  {
    id: 'state-connection',
    title: 'Connection States',
    description: 'Network connection state machine',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Disconnected
    Disconnected --> Connecting : Connect
    Connecting --> Connected : Success
    Connecting --> Disconnected : Timeout
    Connected --> Disconnecting : Disconnect
    Disconnecting --> Disconnected : Complete
    Connected --> Reconnecting : Lost
    Reconnecting --> Connected : Restored
    Reconnecting --> Disconnected : Failed`
  },
  {
    id: 'state-payment',
    title: 'Payment States',
    description: 'Payment processing states',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Initiated
    Initiated --> Processing : Submit
    Processing --> Completed : Success
    Processing --> Failed : Error
    Failed --> Processing : Retry
    Completed --> Refunded : Refund
    Refunded --> [*]
    Failed --> [*]`
  },
  {
    id: 'state-booking',
    title: 'Booking States',
    description: 'Reservation system states',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Available
    Available --> Reserved : Book
    Reserved --> Confirmed : Pay
    Reserved --> Available : Timeout
    Confirmed --> CheckedIn : Arrive
    CheckedIn --> CheckedOut : Leave
    CheckedOut --> [*]
    Confirmed --> Cancelled : Cancel
    Cancelled --> [*]`
  },
  {
    id: 'state-subscription',
    title: 'Subscription States',
    description: 'SaaS subscription lifecycle',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Trial
    Trial --> Active : Subscribe
    Trial --> Expired : TrialEnds
    Active --> PastDue : PaymentFailed
    PastDue --> Active : PaymentSuccess
    PastDue --> Cancelled : NoPayment
    Active --> Cancelled : Unsubscribe
    Cancelled --> Active : Resubscribe
    Cancelled --> [*]`
  },
  {
    id: 'state-thread',
    title: 'Thread States',
    description: 'Process thread lifecycle',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> New
    New --> Ready : Start
    Ready --> Running : Schedule
    Running --> Ready : Preempt
    Running --> Blocked : Wait
    Blocked --> Ready : Event
    Running --> Terminated : Exit
    Terminated --> [*]`
  },
  {
    id: 'state-pr',
    title: 'Pull Request States',
    description: 'Code review workflow',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Open
    Open --> InReview : RequestReview
    InReview --> ChangesRequested : Feedback
    ChangesRequested --> InReview : Update
    InReview --> Approved : Approve
    Approved --> Merged : Merge
    Open --> Closed : Close
    InReview --> Closed : Close
    Merged --> [*]
    Closed --> [*]`
  },
  {
    id: 'state-nested',
    title: 'Nested States',
    description: 'Composite state example',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Idle
    Idle --> Active
    
    state Active {
        [*] --> Processing
        Processing --> Waiting
        Waiting --> Processing
        Processing --> [*]
    }
    
    Active --> Idle : Done
    Active --> Error : Fail
    Error --> Idle : Reset`
  },

  // =============================================
  // GANTT CHARTS (10 templates)
  // =============================================
  {
    id: 'gantt-project',
    title: 'Project Timeline',
    description: 'Software development phases',
    category: 'gantt',
    code: `gantt
    title Project Timeline
    dateFormat YYYY-MM-DD
    section Planning
        Requirements    :a1, 2024-01-01, 14d
        Design         :a2, after a1, 21d
    section Development
        Backend        :b1, after a2, 30d
        Frontend       :b2, after a2, 25d
        Integration    :b3, after b1, 10d
    section Testing
        QA Testing     :c1, after b3, 14d
        UAT            :c2, after c1, 7d
    section Deployment
        Release        :d1, after c2, 3d`
  },
  {
    id: 'gantt-sprint',
    title: 'Sprint Planning',
    description: 'Agile sprint task breakdown',
    category: 'gantt',
    code: `gantt
    title Sprint 1
    dateFormat YYYY-MM-DD
    section Stories
        Login Feature    :active, s1, 2024-01-01, 3d
        Dashboard       :s2, after s1, 4d
        Reports         :s3, after s1, 5d
    section Tech Debt
        Refactor Auth   :t1, 2024-01-03, 2d
        Update Deps     :t2, after t1, 1d`
  },
  {
    id: 'gantt-milestone',
    title: 'Release Milestones',
    description: 'Version release planning',
    category: 'gantt',
    code: `gantt
    title Releases
    dateFormat YYYY-MM-DD
    section v1.0
        Development   :v1, 2024-01-01, 60d
        Testing       :v1t, after v1, 14d
        v1.0 Release  :milestone, m1, after v1t, 0d
    section v1.1
        Development   :v2, after m1, 30d
        Testing       :v2t, after v2, 7d
        v1.1 Release  :milestone, m2, after v2t, 0d`
  },
  {
    id: 'gantt-marketing',
    title: 'Marketing Campaign',
    description: 'Campaign timeline',
    category: 'gantt',
    code: `gantt
    title Campaign Launch
    dateFormat YYYY-MM-DD
    section Planning
        Research      :p1, 2024-01-01, 7d
        Strategy      :p2, after p1, 5d
    section Content
        Create Assets :c1, after p2, 14d
        Copy Writing  :c2, after p2, 10d
    section Launch
        Soft Launch   :l1, after c1, 3d
        Full Launch   :l2, after l1, 1d
    section Analysis
        Review        :a1, after l2, 7d`
  },
  {
    id: 'gantt-onboarding',
    title: 'Employee Onboarding',
    description: 'New hire onboarding',
    category: 'gantt',
    code: `gantt
    title New Hire Onboarding
    dateFormat YYYY-MM-DD
    section Week 1
        Orientation   :w1a, 2024-01-01, 1d
        IT Setup      :w1b, after w1a, 1d
        HR Paperwork  :w1c, after w1b, 1d
        Team Intros   :w1d, after w1c, 2d
    section Week 2
        Training      :w2a, after w1d, 5d
    section Week 3-4
        Shadowing     :w3a, after w2a, 10d`
  },
  {
    id: 'gantt-mvp',
    title: 'MVP Development',
    description: 'Minimum viable product timeline',
    category: 'gantt',
    code: `gantt
    title MVP Development
    dateFormat YYYY-MM-DD
    section Discovery
        User Research   :d1, 2024-01-01, 7d
        Prototype      :d2, after d1, 5d
    section Build
        Core Features  :b1, after d2, 21d
        Basic UI       :b2, after d2, 14d
    section Validate
        Beta Testing   :v1, after b1, 7d
        Iterate        :v2, after v1, 7d
        Launch         :milestone, after v2, 0d`
  },
  {
    id: 'gantt-migration',
    title: 'System Migration',
    description: 'Data migration project',
    category: 'gantt',
    code: `gantt
    title Database Migration
    dateFormat YYYY-MM-DD
    section Prep
        Analysis      :p1, 2024-01-01, 5d
        Mapping       :p2, after p1, 5d
        Scripts       :p3, after p2, 7d
    section Migrate
        Test Run      :m1, after p3, 2d
        Fix Issues    :m2, after m1, 3d
        Production    :crit, m3, after m2, 1d
    section Validate
        Verify        :v1, after m3, 3d
        Cutover       :milestone, after v1, 0d`
  },
  {
    id: 'gantt-parallel',
    title: 'Parallel Workstreams',
    description: 'Concurrent development tracks',
    category: 'gantt',
    code: `gantt
    title Parallel Development
    dateFormat YYYY-MM-DD
    section Team A
        Feature A1    :a1, 2024-01-01, 10d
        Feature A2    :a2, after a1, 10d
    section Team B
        Feature B1    :b1, 2024-01-01, 8d
        Feature B2    :b2, after b1, 12d
    section Integration
        Merge         :i1, after a2, 5d
        Test          :i2, after i1, 5d`
  },
  {
    id: 'gantt-event',
    title: 'Event Planning',
    description: 'Conference event timeline',
    category: 'gantt',
    code: `gantt
    title Conference Planning
    dateFormat YYYY-MM-DD
    section Pre-Event
        Venue Booking   :e1, 2024-01-01, 3d
        Speaker Invites :e2, after e1, 14d
        Registration    :e3, after e2, 30d
    section Production
        Content Prep    :p1, after e2, 21d
        Rehearsals      :p2, after p1, 3d
    section Event
        Day 1           :ev1, after p2, 1d
        Day 2           :ev2, after ev1, 1d`
  },
  {
    id: 'gantt-simple',
    title: 'Simple Timeline',
    description: 'Basic linear timeline',
    category: 'gantt',
    code: `gantt
    title Simple Project
    dateFormat YYYY-MM-DD
    section Tasks
        Task 1    :t1, 2024-01-01, 5d
        Task 2    :t2, after t1, 5d
        Task 3    :t3, after t2, 5d
        Task 4    :t4, after t3, 5d
        Done      :milestone, after t4, 0d`
  },

  // =============================================
  // ER DIAGRAMS (15 templates)
  // =============================================
  {
    id: 'er-ecommerce',
    title: 'E-commerce Database',
    description: 'Online store schema',
    category: 'er',
    code: `erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE_ITEM : contains
    PRODUCT ||--o{ LINE_ITEM : included
    CUSTOMER {
        int id PK
        string name
        string email
    }
    ORDER {
        int id PK
        date created
        string status
    }
    PRODUCT {
        int id PK
        string name
        decimal price
    }
    LINE_ITEM {
        int order_id FK
        int product_id FK
        int quantity
    }`
  },
  {
    id: 'er-blog',
    title: 'Blog Database',
    description: 'Blog platform schema',
    category: 'er',
    code: `erDiagram
    USER ||--o{ POST : writes
    POST ||--o{ COMMENT : has
    USER ||--o{ COMMENT : writes
    POST }o--o{ TAG : tagged
    USER {
        int id PK
        string username
        string email
    }
    POST {
        int id PK
        string title
        text content
    }
    COMMENT {
        int id PK
        text content
        int post_id FK
    }
    TAG {
        int id PK
        string name
    }`
  },
  {
    id: 'er-social',
    title: 'Social Network',
    description: 'Social media schema',
    category: 'er',
    code: `erDiagram
    USER ||--o{ POST : creates
    USER ||--o{ FOLLOW : follows
    POST ||--o{ LIKE : receives
    POST ||--o{ COMMENT : has
    USER {
        int id PK
        string username
        string bio
    }
    POST {
        int id PK
        text content
        datetime created
    }
    FOLLOW {
        int follower_id FK
        int following_id FK
    }
    LIKE {
        int user_id FK
        int post_id FK
    }`
  },
  {
    id: 'er-school',
    title: 'School Database',
    description: 'Educational institution schema',
    category: 'er',
    code: `erDiagram
    STUDENT ||--o{ ENROLLMENT : has
    COURSE ||--o{ ENROLLMENT : contains
    TEACHER ||--o{ COURSE : teaches
    DEPARTMENT ||--o{ COURSE : offers
    STUDENT {
        int id PK
        string name
        date dob
    }
    COURSE {
        int id PK
        string title
        int credits
    }
    TEACHER {
        int id PK
        string name
        string specialization
    }
    ENROLLMENT {
        int student_id FK
        int course_id FK
        string grade
    }`
  },
  {
    id: 'er-hospital',
    title: 'Hospital Database',
    description: 'Healthcare management schema',
    category: 'er',
    code: `erDiagram
    PATIENT ||--o{ APPOINTMENT : schedules
    DOCTOR ||--o{ APPOINTMENT : attends
    PATIENT ||--o{ PRESCRIPTION : receives
    DOCTOR ||--o{ PRESCRIPTION : writes
    PATIENT {
        int id PK
        string name
        date dob
    }
    DOCTOR {
        int id PK
        string name
        string specialty
    }
    APPOINTMENT {
        int id PK
        datetime scheduled
        string status
    }
    PRESCRIPTION {
        int id PK
        string medication
        string dosage
    }`
  },
  {
    id: 'er-library',
    title: 'Library Database',
    description: 'Library management schema',
    category: 'er',
    code: `erDiagram
    MEMBER ||--o{ LOAN : borrows
    BOOK ||--o{ LOAN : loaned
    BOOK ||--o{ BOOK_COPY : hasCopies
    AUTHOR ||--o{ BOOK : writes
    MEMBER {
        int id PK
        string name
        string email
    }
    BOOK {
        int id PK
        string title
        string isbn
    }
    AUTHOR {
        int id PK
        string name
    }
    LOAN {
        int id PK
        date borrowed
        date due
    }`
  },
  {
    id: 'er-hr',
    title: 'HR Database',
    description: 'Human resources schema',
    category: 'er',
    code: `erDiagram
    EMPLOYEE ||--o{ TIMESHEET : submits
    EMPLOYEE }o--|| DEPARTMENT : belongsTo
    EMPLOYEE ||--o| EMPLOYEE : reportsTo
    DEPARTMENT ||--|| EMPLOYEE : managedBy
    EMPLOYEE {
        int id PK
        string name
        decimal salary
    }
    DEPARTMENT {
        int id PK
        string name
        int manager_id FK
    }
    TIMESHEET {
        int id PK
        date date
        decimal hours
    }`
  },
  {
    id: 'er-inventory',
    title: 'Inventory Database',
    description: 'Stock management schema',
    category: 'er',
    code: `erDiagram
    PRODUCT ||--o{ STOCK : stored
    WAREHOUSE ||--o{ STOCK : holds
    SUPPLIER ||--o{ PRODUCT : supplies
    PRODUCT ||--o{ MOVEMENT : tracked
    PRODUCT {
        int id PK
        string sku
        string name
    }
    WAREHOUSE {
        int id PK
        string location
    }
    STOCK {
        int product_id FK
        int warehouse_id FK
        int quantity
    }
    SUPPLIER {
        int id PK
        string name
    }`
  },
  {
    id: 'er-restaurant',
    title: 'Restaurant Database',
    description: 'Restaurant ordering schema',
    category: 'er',
    code: `erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ ORDER_ITEM : contains
    MENU_ITEM ||--o{ ORDER_ITEM : ordered
    TABLE ||--o{ ORDER : serves
    CUSTOMER {
        int id PK
        string name
        string phone
    }
    ORDER {
        int id PK
        datetime created
        string status
    }
    MENU_ITEM {
        int id PK
        string name
        decimal price
    }
    TABLE {
        int id PK
        int seats
    }`
  },
  {
    id: 'er-crm',
    title: 'CRM Database',
    description: 'Customer relationship schema',
    category: 'er',
    code: `erDiagram
    CONTACT ||--o{ DEAL : involved
    COMPANY ||--o{ CONTACT : employs
    DEAL ||--o{ ACTIVITY : has
    USER ||--o{ DEAL : owns
    CONTACT {
        int id PK
        string name
        string email
    }
    COMPANY {
        int id PK
        string name
        string industry
    }
    DEAL {
        int id PK
        string title
        decimal value
    }
    ACTIVITY {
        int id PK
        string type
        text notes
    }`
  },
  {
    id: 'er-rental',
    title: 'Rental Database',
    description: 'Vehicle rental schema',
    category: 'er',
    code: `erDiagram
    CUSTOMER ||--o{ RENTAL : makes
    VEHICLE ||--o{ RENTAL : rented
    VEHICLE }o--|| CATEGORY : belongsTo
    RENTAL ||--o| PAYMENT : has
    CUSTOMER {
        int id PK
        string name
        string license
    }
    VEHICLE {
        int id PK
        string plate
        string model
    }
    RENTAL {
        int id PK
        date start
        date end
    }
    CATEGORY {
        int id PK
        string name
        decimal rate
    }`
  },
  {
    id: 'er-banking',
    title: 'Banking Database',
    description: 'Bank account schema',
    category: 'er',
    code: `erDiagram
    CUSTOMER ||--o{ ACCOUNT : owns
    ACCOUNT ||--o{ TRANSACTION : has
    ACCOUNT }o--|| ACCOUNT_TYPE : isType
    CUSTOMER {
        int id PK
        string name
        string ssn
    }
    ACCOUNT {
        int id PK
        string number
        decimal balance
    }
    TRANSACTION {
        int id PK
        decimal amount
        datetime created
    }
    ACCOUNT_TYPE {
        int id PK
        string name
        decimal interest
    }`
  },
  {
    id: 'er-project',
    title: 'Project Management',
    description: 'Project tracking schema',
    category: 'er',
    code: `erDiagram
    PROJECT ||--o{ TASK : contains
    USER ||--o{ TASK : assigned
    USER ||--o{ PROJECT : manages
    TASK ||--o{ COMMENT : has
    PROJECT {
        int id PK
        string name
        date deadline
    }
    TASK {
        int id PK
        string title
        string status
    }
    USER {
        int id PK
        string name
        string role
    }
    COMMENT {
        int id PK
        text content
    }`
  },
  {
    id: 'er-survey',
    title: 'Survey Database',
    description: 'Survey and responses schema',
    category: 'er',
    code: `erDiagram
    SURVEY ||--o{ QUESTION : contains
    QUESTION ||--o{ OPTION : has
    RESPONDENT ||--o{ RESPONSE : submits
    RESPONSE ||--o{ ANSWER : contains
    SURVEY {
        int id PK
        string title
    }
    QUESTION {
        int id PK
        string text
        string type
    }
    RESPONDENT {
        int id PK
        string email
    }
    ANSWER {
        int response_id FK
        int question_id FK
        text value
    }`
  },
  {
    id: 'er-simple',
    title: 'Simple Relationships',
    description: 'Basic one-to-many example',
    category: 'er',
    code: `erDiagram
    PARENT ||--o{ CHILD : has
    PARENT {
        int id PK
        string name
    }
    CHILD {
        int id PK
        string name
        int parent_id FK
    }`
  },

  // =============================================
  // PIE CHARTS (8 templates)
  // =============================================
  {
    id: 'pie-budget',
    title: 'Budget Allocation',
    description: 'Department budget distribution',
    category: 'pie',
    code: `pie showData
    title Budget Allocation
    "Engineering" : 40
    "Marketing" : 25
    "Operations" : 20
    "HR" : 10
    "Other" : 5`
  },
  {
    id: 'pie-traffic',
    title: 'Traffic Sources',
    description: 'Website traffic breakdown',
    category: 'pie',
    code: `pie showData
    title Traffic Sources
    "Organic Search" : 45
    "Direct" : 25
    "Social Media" : 15
    "Referral" : 10
    "Email" : 5`
  },
  {
    id: 'pie-market',
    title: 'Market Share',
    description: 'Competitor market share',
    category: 'pie',
    code: `pie showData
    title Market Share
    "Company A" : 35
    "Company B" : 28
    "Company C" : 20
    "Others" : 17`
  },
  {
    id: 'pie-time',
    title: 'Time Distribution',
    description: 'Work time allocation',
    category: 'pie',
    code: `pie showData
    title Work Time
    "Development" : 40
    "Meetings" : 20
    "Code Review" : 15
    "Planning" : 15
    "Admin" : 10`
  },
  {
    id: 'pie-survey',
    title: 'Survey Results',
    description: 'Customer satisfaction survey',
    category: 'pie',
    code: `pie showData
    title Customer Satisfaction
    "Very Satisfied" : 45
    "Satisfied" : 30
    "Neutral" : 15
    "Dissatisfied" : 7
    "Very Dissatisfied" : 3`
  },
  {
    id: 'pie-expenses',
    title: 'Monthly Expenses',
    description: 'Personal expense breakdown',
    category: 'pie',
    code: `pie showData
    title Monthly Expenses
    "Rent" : 35
    "Food" : 20
    "Transport" : 15
    "Utilities" : 10
    "Entertainment" : 10
    "Savings" : 10`
  },
  {
    id: 'pie-devices',
    title: 'Device Usage',
    description: 'User device statistics',
    category: 'pie',
    code: `pie showData
    title Device Types
    "Mobile" : 55
    "Desktop" : 35
    "Tablet" : 10`
  },
  {
    id: 'pie-languages',
    title: 'Languages Used',
    description: 'Programming language usage',
    category: 'pie',
    code: `pie showData
    title Languages
    "JavaScript" : 30
    "Python" : 25
    "Java" : 20
    "TypeScript" : 15
    "Go" : 10`
  },

  // =============================================
  // MINDMAPS (12 templates)
  // =============================================
  {
    id: 'mindmap-project',
    title: 'Project Planning',
    description: 'Project breakdown mindmap',
    category: 'mindmap',
    code: `mindmap
    root((Project))
        Planning
            Requirements
            Timeline
            Resources
        Development
            Backend
                API
                Database
            Frontend
                UI Design
                Components
        Testing
            Unit Tests
            Integration
            UAT
        Deployment
            Staging
            Production`
  },
  {
    id: 'mindmap-learning',
    title: 'Learning Path',
    description: 'Technology learning roadmap',
    category: 'mindmap',
    code: `mindmap
    root((Web Dev))
        Frontend
            HTML/CSS
            JavaScript
            React
            TypeScript
        Backend
            Node.js
            Python
            Databases
        DevOps
            Git
            Docker
            CI/CD
        Tools
            VS Code
            Terminal`
  },
  {
    id: 'mindmap-features',
    title: 'Feature Breakdown',
    description: 'Product feature decomposition',
    category: 'mindmap',
    code: `mindmap
    root((App Features))
        Auth
            Login
            Register
            OAuth
            2FA
        Dashboard
            Analytics
            Charts
            Reports
        Settings
            Profile
            Preferences
            Notifications
        Admin
            Users
            Roles
            Logs`
  },
  {
    id: 'mindmap-startup',
    title: 'Startup Planning',
    description: 'Business planning mindmap',
    category: 'mindmap',
    code: `mindmap
    root((Startup))
        Product
            MVP
            Features
            Roadmap
        Team
            Founders
            Hiring
            Culture
        Funding
            Bootstrapping
            Seed
            Series A
        Growth
            Marketing
            Sales
            Partnerships`
  },
  {
    id: 'mindmap-api',
    title: 'API Design',
    description: 'REST API planning',
    category: 'mindmap',
    code: `mindmap
    root((API))
        Auth
            JWT
            OAuth
            API Keys
        Endpoints
            Users
            Products
            Orders
        Features
            Pagination
            Filtering
            Versioning
        Docs
            OpenAPI
            Examples`
  },
  {
    id: 'mindmap-meeting',
    title: 'Meeting Agenda',
    description: 'Meeting topics breakdown',
    category: 'mindmap',
    code: `mindmap
    root((Sprint Review))
        Completed
            Feature A
            Bug Fixes
        Demo
            New UI
            API Updates
        Blockers
            Technical
            Resources
        Next Sprint
            Priorities
            Assignments`
  },
  {
    id: 'mindmap-architecture',
    title: 'System Architecture',
    description: 'System design mindmap',
    category: 'mindmap',
    code: `mindmap
    root((Architecture))
        Frontend
            React SPA
            Mobile App
        Backend
            API Gateway
            Microservices
        Data
            PostgreSQL
            Redis
            S3
        Infrastructure
            AWS
            Kubernetes
            CDN`
  },
  {
    id: 'mindmap-testing',
    title: 'Testing Strategy',
    description: 'QA testing approach',
    category: 'mindmap',
    code: `mindmap
    root((Testing))
        Unit
            Jest
            Mocha
        Integration
            API Tests
            DB Tests
        E2E
            Playwright
            Cypress
        Performance
            Load Testing
            Stress Testing`
  },
  {
    id: 'mindmap-career',
    title: 'Career Growth',
    description: 'Career development path',
    category: 'mindmap',
    code: `mindmap
    root((Career))
        Skills
            Technical
            Soft Skills
            Leadership
        Experience
            Projects
            Certifications
            Open Source
        Network
            Conferences
            Meetups
            Online
        Goals
            Short Term
            Long Term`
  },
  {
    id: 'mindmap-design',
    title: 'Design System',
    description: 'UI design system components',
    category: 'mindmap',
    code: `mindmap
    root((Design System))
        Colors
            Primary
            Secondary
            Semantic
        Typography
            Fonts
            Sizes
            Weights
        Components
            Buttons
            Forms
            Cards
        Patterns
            Layout
            Navigation
            Feedback`
  },
  {
    id: 'mindmap-problem',
    title: 'Problem Solving',
    description: 'Root cause analysis',
    category: 'mindmap',
    code: `mindmap
    root((Problem))
        Symptoms
            Error Messages
            Slow Performance
        Causes
            Code Issues
            Infrastructure
        Solutions
            Short Term
            Long Term
        Prevention
            Monitoring
            Testing`
  },
  {
    id: 'mindmap-content',
    title: 'Content Strategy',
    description: 'Content planning mindmap',
    category: 'mindmap',
    code: `mindmap
    root((Content))
        Blog
            Tutorials
            News
            Case Studies
        Social
            Twitter
            LinkedIn
            YouTube
        Email
            Newsletter
            Sequences
        SEO
            Keywords
            Backlinks`
  },

  // =============================================
  // GIT GRAPHS (8 templates)
  // =============================================
  {
    id: 'git-branching',
    title: 'Feature Branch',
    description: 'Feature branch workflow',
    category: 'git',
    code: `gitGraph
    commit id: "Initial"
    branch develop
    checkout develop
    commit id: "Dev setup"
    branch feature-1
    checkout feature-1
    commit id: "Feature work"
    commit id: "More work"
    checkout develop
    merge feature-1
    checkout main
    merge develop tag: "v1.0"`
  },
  {
    id: 'git-release',
    title: 'Release Flow',
    description: 'GitFlow release process',
    category: 'git',
    code: `gitGraph
    commit id: "v1.0.0"
    branch develop
    commit id: "Feature A"
    commit id: "Feature B"
    branch release-1.1
    commit id: "Bump version"
    commit id: "Fix bug"
    checkout main
    merge release-1.1 tag: "v1.1.0"
    checkout develop
    merge release-1.1
    commit id: "Continue dev"`
  },
  {
    id: 'git-hotfix',
    title: 'Hotfix Flow',
    description: 'Emergency hotfix pattern',
    category: 'git',
    code: `gitGraph
    commit id: "v1.0"
    branch develop
    commit id: "Feature"
    checkout main
    branch hotfix
    commit id: "Critical fix"
    checkout main
    merge hotfix tag: "v1.0.1"
    checkout develop
    merge hotfix
    commit id: "Continue"`
  },
  {
    id: 'git-simple',
    title: 'Simple Branch',
    description: 'Basic branching example',
    category: 'git',
    code: `gitGraph
    commit
    commit
    branch feature
    checkout feature
    commit
    commit
    checkout main
    merge feature
    commit`
  },
  {
    id: 'git-parallel',
    title: 'Parallel Features',
    description: 'Multiple feature branches',
    category: 'git',
    code: `gitGraph
    commit id: "Init"
    branch feature-a
    branch feature-b
    checkout feature-a
    commit id: "A1"
    commit id: "A2"
    checkout feature-b
    commit id: "B1"
    commit id: "B2"
    checkout main
    merge feature-a
    merge feature-b`
  },
  {
    id: 'git-rebase',
    title: 'Rebase Workflow',
    description: 'Rebase before merge pattern',
    category: 'git',
    code: `gitGraph
    commit id: "Base"
    branch feature
    commit id: "F1"
    checkout main
    commit id: "M1"
    commit id: "M2"
    checkout feature
    commit id: "F2"
    checkout main
    merge feature
    commit id: "Release" tag: "v1.0"`
  },
  {
    id: 'git-trunk',
    title: 'Trunk Based',
    description: 'Trunk-based development',
    category: 'git',
    code: `gitGraph
    commit id: "Init"
    commit id: "Feature 1" tag: "v0.1"
    commit id: "Feature 2"
    commit id: "Feature 3" tag: "v0.2"
    commit id: "Feature 4"
    commit id: "Release" tag: "v1.0"`
  },
  {
    id: 'git-environment',
    title: 'Environment Branches',
    description: 'Dev/Staging/Prod branches',
    category: 'git',
    code: `gitGraph
    commit id: "Init"
    branch develop
    branch staging
    checkout develop
    commit id: "Feature"
    checkout staging
    merge develop
    commit id: "QA fixes"
    checkout main
    merge staging tag: "v1.0"
    checkout develop
    merge main`
  },

  // =============================================
  // NEW FLOWCHARTS (10 more templates)
  // =============================================
  {
    id: 'flowchart-medical-diagnosis',
    title: 'Medical Diagnosis Flow',
    description: 'Patient symptom evaluation decision tree',
    category: 'flowchart',
    code: `flowchart TD
    A[Patient Arrives] --> B{Emergency?}
    B -->|Yes| C[Triage Priority 1]
    B -->|No| D[Check Symptoms]
    D --> E{Fever?}
    E -->|Yes| F{COVID Symptoms?}
    F -->|Yes| G[COVID Test]
    F -->|No| H[General Evaluation]
    E -->|No| I{Pain Level > 7?}
    I -->|Yes| J[Urgent Care]
    I -->|No| K[Standard Queue]
    C --> L[Immediate Treatment]
    G --> M{Positive?}
    M -->|Yes| N[Isolation Protocol]
    M -->|No| H
    H --> O[Treatment Plan]
    J --> O
    K --> O
    N --> O
    L --> O`
  },
  {
    id: 'flowchart-loan-approval',
    title: 'Loan Approval Process',
    description: 'Bank loan application decision flow',
    category: 'flowchart',
    code: `flowchart TD
    A[Loan Application] --> B[Credit Check]
    B --> C{Score >= 700?}
    C -->|Yes| D[Income Verification]
    C -->|No| E{Score >= 600?}
    E -->|Yes| F[Higher Interest Rate]
    F --> D
    E -->|No| G[Decline Application]
    D --> H{DTI < 43%?}
    H -->|Yes| I[Collateral Assessment]
    H -->|No| J{DTI < 50%?}
    J -->|Yes| K[Reduced Amount]
    J -->|No| G
    I --> L{Sufficient?}
    L -->|Yes| M[Final Review]
    L -->|No| N[Request Additional]
    N --> I
    K --> M
    M --> O{Approved?}
    O -->|Yes| P[Generate Offer]
    O -->|No| G
    P --> Q[Customer Accepts]
    Q --> R[Disbursement]`
  },
  {
    id: 'flowchart-incident-response',
    title: 'Security Incident Response',
    description: 'Cybersecurity incident handling workflow',
    category: 'flowchart',
    code: `flowchart TD
    A[Alert Triggered] --> B{False Positive?}
    B -->|Yes| C[Document & Close]
    B -->|No| D[Assess Severity]
    D --> E{Critical?}
    E -->|Yes| F[Activate War Room]
    E -->|No| G{High?}
    G -->|Yes| H[Escalate to Lead]
    G -->|No| I[Standard Response]
    F --> J[Isolate Systems]
    J --> K[Forensic Capture]
    H --> L[Investigate]
    I --> L
    K --> M[Root Cause Analysis]
    L --> M
    M --> N[Remediation Plan]
    N --> O[Implement Fix]
    O --> P[Verify Resolution]
    P --> Q{Resolved?}
    Q -->|No| N
    Q -->|Yes| R[Post-Incident Review]
    R --> S[Update Playbooks]
    S --> T[Close Incident]`
  },
  {
    id: 'flowchart-content-moderation',
    title: 'Content Moderation Pipeline',
    description: 'User-generated content review system',
    category: 'flowchart',
    code: `flowchart TD
    A[Content Submitted] --> B[AI Pre-screening]
    B --> C{Auto-flagged?}
    C -->|No| D[Publish]
    C -->|Yes| E{Confidence > 95%?}
    E -->|Yes| F{Violation Type}
    E -->|No| G[Human Review Queue]
    F -->|Illegal| H[Remove + Report]
    F -->|Spam| I[Remove + Warn]
    F -->|Mild| G
    G --> J[Moderator Reviews]
    J --> K{Decision}
    K -->|Approve| D
    K -->|Reject| L[Remove Content]
    K -->|Escalate| M[Senior Review]
    L --> N[Notify User]
    M --> O{Final Decision}
    O -->|Approve| D
    O -->|Reject| L
    N --> P{Appeal?}
    P -->|Yes| M
    P -->|No| Q[Case Closed]`
  },
  {
    id: 'flowchart-kubernetes-deployment',
    title: 'Kubernetes Deployment Flow',
    description: 'K8s rolling deployment process',
    category: 'flowchart',
    code: `flowchart LR
    subgraph CI
        A[Code Push] --> B[Build Image]
        B --> C[Run Tests]
        C --> D[Push to Registry]
    end
    subgraph CD
        D --> E[Update Manifest]
        E --> F[Apply to Cluster]
    end
    subgraph Kubernetes
        F --> G[Create New ReplicaSet]
        G --> H[Scale Up New Pods]
        H --> I{Health Check}
        I -->|Pass| J[Scale Down Old]
        I -->|Fail| K[Rollback]
        J --> L[Update Service]
        K --> M[Alert Team]
    end
    L --> N[Deployment Complete]`
  },
  {
    id: 'flowchart-saas-signup',
    title: 'SaaS Onboarding Flow',
    description: 'New customer onboarding journey',
    category: 'flowchart',
    code: `flowchart TD
    A[Landing Page] --> B{Has Account?}
    B -->|Yes| C[Login]
    B -->|No| D[Sign Up Form]
    D --> E[Email Verification]
    E --> F{Verified?}
    F -->|No| G[Resend Email]
    G --> E
    F -->|Yes| H[Select Plan]
    H --> I{Free Trial?}
    I -->|Yes| J[14-Day Trial]
    I -->|No| K[Payment Setup]
    J --> L[Onboarding Wizard]
    K --> L
    L --> M[Company Profile]
    M --> N[Invite Team]
    N --> O[Integration Setup]
    O --> P[Sample Data?]
    P -->|Yes| Q[Load Demo Data]
    P -->|No| R[Empty Workspace]
    Q --> S[Dashboard]
    R --> S
    S --> T[Welcome Tour]
    T --> U[Active Customer]`
  },
  {
    id: 'flowchart-ab-testing',
    title: 'A/B Testing Pipeline',
    description: 'Experiment design and analysis flow',
    category: 'flowchart',
    code: `flowchart TD
    A[Hypothesis] --> B[Design Experiment]
    B --> C[Calculate Sample Size]
    C --> D[Implement Variants]
    D --> E[QA Testing]
    E --> F{Ready?}
    F -->|No| D
    F -->|Yes| G[Start Experiment]
    G --> H[Collect Data]
    H --> I{Min Sample?}
    I -->|No| H
    I -->|Yes| J[Statistical Analysis]
    J --> K{Significant?}
    K -->|No| L{Continue?}
    L -->|Yes| H
    L -->|No| M[Inconclusive]
    K -->|Yes| N{Winner?}
    N -->|Control| O[Keep Original]
    N -->|Variant| P[Roll Out Winner]
    M --> Q[Document Learnings]
    O --> Q
    P --> Q
    Q --> R[Archive Experiment]`
  },
  {
    id: 'flowchart-ml-pipeline',
    title: 'ML Training Pipeline',
    description: 'Machine learning model training workflow',
    category: 'flowchart',
    code: `flowchart LR
    subgraph Data
        A[Raw Data] --> B[Data Validation]
        B --> C[Feature Engineering]
        C --> D[Train/Test Split]
    end
    subgraph Training
        D --> E[Model Training]
        E --> F[Hyperparameter Tuning]
        F --> G[Cross Validation]
    end
    subgraph Evaluation
        G --> H[Metrics Calculation]
        H --> I{Performance OK?}
        I -->|No| J[Adjust Features]
        J --> C
        I -->|Yes| K[Model Registry]
    end
    subgraph Deployment
        K --> L[Staging Deploy]
        L --> M[Shadow Testing]
        M --> N{Approved?}
        N -->|Yes| O[Production]
        N -->|No| E
    end`
  },
  {
    id: 'flowchart-insurance-claim',
    title: 'Insurance Claim Process',
    description: 'Claim submission and processing workflow',
    category: 'flowchart',
    code: `flowchart TD
    A[Claim Submitted] --> B[Initial Review]
    B --> C{Complete Info?}
    C -->|No| D[Request Documents]
    D --> E[Customer Uploads]
    E --> B
    C -->|Yes| F[Assign Adjuster]
    F --> G{On-site Needed?}
    G -->|Yes| H[Schedule Inspection]
    G -->|No| I[Remote Assessment]
    H --> J[Conduct Inspection]
    J --> K[Damage Report]
    I --> K
    K --> L{Coverage Valid?}
    L -->|No| M[Deny Claim]
    L -->|Yes| N[Calculate Payout]
    N --> O{Above Threshold?}
    O -->|Yes| P[Manager Approval]
    O -->|No| Q[Auto-Approve]
    P --> R{Approved?}
    R -->|No| S[Negotiate]
    R -->|Yes| T[Process Payment]
    Q --> T
    S --> N
    M --> U[Send Denial Letter]
    T --> V[Claim Closed]`
  },
  {
    id: 'flowchart-event-driven',
    title: 'Event-Driven Architecture',
    description: 'Event sourcing message flow',
    category: 'flowchart',
    code: `flowchart TB
    subgraph Producers
        A[Order Service] -->|OrderCreated| B[Event Bus]
        C[Payment Service] -->|PaymentReceived| B
        D[Inventory Service] -->|StockUpdated| B
    end
    subgraph Event Bus
        B --> E{Route Event}
    end
    subgraph Consumers
        E --> F[Notification Service]
        E --> G[Analytics Service]
        E --> H[Audit Logger]
        E --> I[Search Indexer]
    end
    subgraph Storage
        F --> J[(Email Queue)]
        G --> K[(Data Warehouse)]
        H --> L[(Event Store)]
        I --> M[(Elasticsearch)]
    end`
  },

  // =============================================
  // NEW SEQUENCE DIAGRAMS (9 more templates)
  // =============================================
  {
    id: 'sequence-event-sourcing',
    title: 'Event Sourcing Pattern',
    description: 'CQRS with event store communication',
    category: 'sequence',
    code: `sequenceDiagram
    participant Client
    participant CommandAPI
    participant EventStore
    participant Projector
    participant QueryAPI
    participant ReadDB
    
    Client->>CommandAPI: CreateOrder
    CommandAPI->>EventStore: OrderCreated Event
    EventStore-->>CommandAPI: Event ID
    CommandAPI-->>Client: Accepted (202)
    
    EventStore->>Projector: New Event
    Projector->>ReadDB: Update Projection
    
    Client->>QueryAPI: GetOrder
    QueryAPI->>ReadDB: Query
    ReadDB-->>QueryAPI: Order Data
    QueryAPI-->>Client: Order Response`
  },
  {
    id: 'sequence-stripe-payment',
    title: 'Stripe Payment Flow',
    description: 'Payment intent and webhook handling',
    category: 'sequence',
    code: `sequenceDiagram
    participant Browser
    participant Server
    participant Stripe
    participant Webhook
    participant DB
    
    Browser->>Server: Initiate Checkout
    Server->>Stripe: Create PaymentIntent
    Stripe-->>Server: Client Secret
    Server-->>Browser: Return Secret
    Browser->>Stripe: Confirm Payment
    Stripe-->>Browser: 3DS Challenge
    Browser->>Stripe: Complete Auth
    Stripe-->>Browser: Success
    
    Note over Stripe,Webhook: Async Webhook
    Stripe->>Webhook: payment_intent.succeeded
    Webhook->>DB: Update Order Status
    Webhook-->>Stripe: 200 OK`
  },
  {
    id: 'sequence-kafka-consumer',
    title: 'Kafka Consumer Group',
    description: 'Message consumption with commit',
    category: 'sequence',
    code: `sequenceDiagram
    participant Producer
    participant Kafka
    participant Consumer1
    participant Consumer2
    participant DB
    
    Producer->>Kafka: Publish Message
    
    par Partition 0
        Kafka->>Consumer1: Poll Messages
        Consumer1->>DB: Process
        Consumer1->>Kafka: Commit Offset
    and Partition 1
        Kafka->>Consumer2: Poll Messages
        Consumer2->>DB: Process
        Consumer2->>Kafka: Commit Offset
    end
    
    Note over Consumer1: Consumer Crashes
    Kafka->>Consumer2: Rebalance
    Kafka->>Consumer2: Assign Partition 0`
  },
  {
    id: 'sequence-graphql-subscription',
    title: 'GraphQL Subscription',
    description: 'Real-time GraphQL via WebSocket',
    category: 'sequence',
    code: `sequenceDiagram
    participant Client
    participant Gateway
    participant Subscription
    participant Resolver
    participant PubSub
    
    Client->>Gateway: WS Connection
    Gateway-->>Client: Connected
    Client->>Gateway: Subscribe(newMessage)
    Gateway->>Subscription: Register
    Subscription->>PubSub: Listen(MESSAGES)
    
    Note over Resolver: Mutation happens
    Resolver->>PubSub: Publish(MESSAGES)
    PubSub->>Subscription: New Event
    Subscription->>Gateway: Push Data
    Gateway-->>Client: Subscription Update
    
    Client->>Gateway: Unsubscribe
    Subscription->>PubSub: Stop Listening`
  },
  {
    id: 'sequence-oidc-flow',
    title: 'OpenID Connect Flow',
    description: 'OIDC authorization code flow with PKCE',
    category: 'sequence',
    code: `sequenceDiagram
    participant Browser
    participant App
    participant AuthServer
    participant UserInfo
    
    Browser->>App: Login Click
    App->>App: Generate PKCE Verifier
    App->>Browser: Redirect to Auth
    Browser->>AuthServer: /authorize?code_challenge
    AuthServer-->>Browser: Login Form
    Browser->>AuthServer: Username/Password
    AuthServer-->>Browser: Redirect + Code
    Browser->>App: Callback + Code
    App->>AuthServer: /token + code_verifier
    AuthServer-->>App: Access + ID + Refresh
    App->>UserInfo: GET /userinfo
    UserInfo-->>App: User Claims
    App-->>Browser: Authenticated Session`
  },
  {
    id: 'sequence-distributed-tracing',
    title: 'Distributed Tracing',
    description: 'Request tracing across services',
    category: 'sequence',
    code: `sequenceDiagram
    participant Client
    participant Gateway
    participant ServiceA
    participant ServiceB
    participant Jaeger
    
    Client->>Gateway: Request
    Note right of Gateway: trace-id: abc123
    Gateway->>Jaeger: Start Span
    Gateway->>ServiceA: Forward (trace-id)
    ServiceA->>Jaeger: Child Span
    ServiceA->>ServiceB: Internal Call
    ServiceB->>Jaeger: Child Span
    ServiceB-->>ServiceA: Response
    ServiceB->>Jaeger: End Span
    ServiceA-->>Gateway: Response
    ServiceA->>Jaeger: End Span
    Gateway-->>Client: Final Response
    Gateway->>Jaeger: End Span`
  },
  {
    id: 'sequence-idempotency',
    title: 'Idempotent Request',
    description: 'Idempotency key pattern for APIs',
    category: 'sequence',
    code: `sequenceDiagram
    participant Client
    participant API
    participant IdempotencyStore
    participant PaymentProcessor
    
    Client->>API: POST /charge (Idempotency-Key: xyz)
    API->>IdempotencyStore: Check Key xyz
    IdempotencyStore-->>API: Not Found
    API->>PaymentProcessor: Process Charge
    PaymentProcessor-->>API: Success
    API->>IdempotencyStore: Store Result
    API-->>Client: 200 OK
    
    Note over Client: Network Timeout - Retry
    Client->>API: POST /charge (Idempotency-Key: xyz)
    API->>IdempotencyStore: Check Key xyz
    IdempotencyStore-->>API: Found (cached result)
    API-->>Client: 200 OK (cached)`
  },
  {
    id: 'sequence-cdc-debezium',
    title: 'Change Data Capture',
    description: 'Debezium CDC pipeline flow',
    category: 'sequence',
    code: `sequenceDiagram
    participant App
    participant PostgreSQL
    participant Debezium
    participant Kafka
    participant Consumer
    participant Elasticsearch
    
    App->>PostgreSQL: INSERT/UPDATE
    PostgreSQL->>PostgreSQL: Write WAL
    Debezium->>PostgreSQL: Read WAL
    Debezium->>Kafka: Publish Change Event
    Consumer->>Kafka: Poll Events
    Consumer->>Consumer: Transform
    Consumer->>Elasticsearch: Index Document
    
    Note over App,Elasticsearch: Data Eventually Consistent`
  },
  {
    id: 'sequence-multi-tenant',
    title: 'Multi-Tenant Request',
    description: 'Tenant context propagation',
    category: 'sequence',
    code: `sequenceDiagram
    participant Client
    participant Gateway
    participant TenantResolver
    participant Service
    participant TenantDB
    
    Client->>Gateway: Request (X-Tenant-ID: acme)
    Gateway->>TenantResolver: Resolve Tenant
    TenantResolver->>TenantDB: Get Config
    TenantDB-->>TenantResolver: Connection String
    TenantResolver-->>Gateway: Tenant Context
    Gateway->>Service: Forward + Context
    Service->>TenantDB: Query (acme schema)
    TenantDB-->>Service: Tenant Data
    Service-->>Gateway: Response
    Gateway-->>Client: Tenant Response`
  },

  // =============================================
  // NEW CLASS DIAGRAMS (9 more templates)
  // =============================================
  {
    id: 'class-command',
    title: 'Command Pattern',
    description: 'Encapsulated request execution',
    category: 'class',
    code: `classDiagram
    class Command {
        <<interface>>
        +execute()
        +undo()
    }
    class CreateOrderCommand {
        -order: Order
        +execute()
        +undo()
    }
    class CancelOrderCommand {
        -orderId: string
        +execute()
        +undo()
    }
    class Invoker {
        -history: Command[]
        +executeCommand(cmd)
        +undoLast()
    }
    class Receiver {
        +createOrder(data)
        +cancelOrder(id)
    }
    Command <|.. CreateOrderCommand
    Command <|.. CancelOrderCommand
    Invoker --> Command
    CreateOrderCommand --> Receiver
    CancelOrderCommand --> Receiver`
  },
  {
    id: 'class-mediator',
    title: 'Mediator Pattern',
    description: 'Centralized communication coordinator',
    category: 'class',
    code: `classDiagram
    class Mediator {
        <<interface>>
        +notify(sender, event)
    }
    class ChatRoom {
        -users: User[]
        +notify(sender, event)
        +addUser(user)
    }
    class Colleague {
        <<abstract>>
        #mediator: Mediator
        +send(message)
        +receive(message)*
    }
    class User {
        -name: string
        +send(message)
        +receive(message)
    }
    Mediator <|.. ChatRoom
    Colleague <|-- User
    Colleague --> Mediator
    ChatRoom o-- User`
  },
  {
    id: 'class-state-pattern',
    title: 'State Pattern',
    description: 'State-dependent behavior',
    category: 'class',
    code: `classDiagram
    class Context {
        -state: State
        +setState(state)
        +request()
    }
    class State {
        <<interface>>
        +handle(context)
    }
    class DraftState {
        +handle(context)
    }
    class PublishedState {
        +handle(context)
    }
    class ArchivedState {
        +handle(context)
    }
    Context o-- State
    State <|.. DraftState
    State <|.. PublishedState
    State <|.. ArchivedState`
  },
  {
    id: 'class-visitor',
    title: 'Visitor Pattern',
    description: 'Operations on object structures',
    category: 'class',
    code: `classDiagram
    class Element {
        <<interface>>
        +accept(visitor)
    }
    class Visitor {
        <<interface>>
        +visitCircle(c)
        +visitRectangle(r)
    }
    class Circle {
        +radius
        +accept(visitor)
    }
    class Rectangle {
        +width
        +height
        +accept(visitor)
    }
    class AreaCalculator {
        +visitCircle(c)
        +visitRectangle(r)
    }
    class XMLExporter {
        +visitCircle(c)
        +visitRectangle(r)
    }
    Element <|.. Circle
    Element <|.. Rectangle
    Visitor <|.. AreaCalculator
    Visitor <|.. XMLExporter
    Element ..> Visitor`
  },
  {
    id: 'class-ddd-aggregate',
    title: 'DDD Aggregate Root',
    description: 'Domain-driven design aggregate pattern',
    category: 'class',
    code: `classDiagram
    class Order {
        <<Aggregate Root>>
        -id: OrderId
        -items: OrderItem[]
        -status: OrderStatus
        +addItem(product, qty)
        +removeItem(itemId)
        +submit()
        +cancel()
    }
    class OrderId {
        <<Value Object>>
        -value: UUID
    }
    class OrderItem {
        <<Entity>>
        -id: ItemId
        -product: ProductRef
        -quantity: int
        -price: Money
    }
    class Money {
        <<Value Object>>
        -amount: decimal
        -currency: string
    }
    class OrderStatus {
        <<Enumeration>>
        DRAFT
        SUBMITTED
        PAID
        SHIPPED
    }
    Order *-- OrderId
    Order *-- OrderItem
    Order --> OrderStatus
    OrderItem *-- Money`
  },
  {
    id: 'class-clean-architecture',
    title: 'Clean Architecture Layers',
    description: 'Onion/Clean architecture structure',
    category: 'class',
    code: `classDiagram
    class Entity {
        <<Domain>>
        +id
        +businessLogic()
    }
    class UseCase {
        <<Application>>
        -repository
        +execute(request)
    }
    class Repository {
        <<Interface>>
        +save(entity)
        +findById(id)
    }
    class Controller {
        <<Infrastructure>>
        -useCase
        +handleRequest()
    }
    class SQLRepository {
        <<Infrastructure>>
        -db
        +save(entity)
        +findById(id)
    }
    class Presenter {
        <<Infrastructure>>
        +present(data)
    }
    UseCase --> Entity
    UseCase --> Repository
    Repository <|.. SQLRepository
    Controller --> UseCase
    Controller --> Presenter`
  },
  {
    id: 'class-cqrs',
    title: 'CQRS Pattern',
    description: 'Command Query Responsibility Segregation',
    category: 'class',
    code: `classDiagram
    class Command {
        <<interface>>
    }
    class Query {
        <<interface>>
    }
    class CommandHandler {
        <<interface>>
        +handle(cmd)
    }
    class QueryHandler {
        <<interface>>
        +handle(query)
    }
    class CreateUserCmd {
        +name
        +email
    }
    class GetUserQuery {
        +userId
    }
    class CreateUserHandler {
        -writeDb
        +handle(cmd)
    }
    class GetUserHandler {
        -readDb
        +handle(query)
    }
    Command <|.. CreateUserCmd
    Query <|.. GetUserQuery
    CommandHandler <|.. CreateUserHandler
    QueryHandler <|.. GetUserHandler`
  },
  {
    id: 'class-hexagonal',
    title: 'Hexagonal Architecture',
    description: 'Ports and adapters pattern',
    category: 'class',
    code: `classDiagram
    class OrderService {
        <<Domain>>
        -orderPort: OrderPort
        -paymentPort: PaymentPort
        +createOrder(data)
    }
    class OrderPort {
        <<Port>>
        +save(order)
        +findById(id)
    }
    class PaymentPort {
        <<Port>>
        +charge(amount)
    }
    class PostgresAdapter {
        <<Adapter>>
        +save(order)
        +findById(id)
    }
    class StripeAdapter {
        <<Adapter>>
        +charge(amount)
    }
    class RestController {
        <<Adapter>>
        -service: OrderService
        +postOrder()
    }
    OrderService --> OrderPort
    OrderService --> PaymentPort
    OrderPort <|.. PostgresAdapter
    PaymentPort <|.. StripeAdapter
    RestController --> OrderService`
  },
  {
    id: 'class-specification',
    title: 'Specification Pattern',
    description: 'Combinable business rules',
    category: 'class',
    code: `classDiagram
    class Specification {
        <<interface>>
        +isSatisfiedBy(candidate): bool
        +and(spec): Specification
        +or(spec): Specification
        +not(): Specification
    }
    class CompositeSpec {
        <<abstract>>
        #specs: Specification[]
    }
    class AndSpecification {
        +isSatisfiedBy(candidate)
    }
    class OrSpecification {
        +isSatisfiedBy(candidate)
    }
    class PremiumCustomerSpec {
        +isSatisfiedBy(customer)
    }
    class ActiveSubscriptionSpec {
        +isSatisfiedBy(customer)
    }
    Specification <|.. CompositeSpec
    Specification <|.. PremiumCustomerSpec
    Specification <|.. ActiveSubscriptionSpec
    CompositeSpec <|-- AndSpecification
    CompositeSpec <|-- OrSpecification`
  },

  // =============================================
  // NEW STATE DIAGRAMS (8 more templates)
  // =============================================
  {
    id: 'state-form-wizard',
    title: 'Form Wizard States',
    description: 'Multi-step form navigation',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> PersonalInfo
    PersonalInfo --> Address : Next
    PersonalInfo --> PersonalInfo : Validate
    Address --> PersonalInfo : Back
    Address --> Payment : Next
    Address --> Address : Validate
    Payment --> Address : Back
    Payment --> Review : Next
    Payment --> Payment : Validate
    Review --> Payment : Back
    Review --> Processing : Submit
    Processing --> Success : Complete
    Processing --> Error : Failed
    Error --> Payment : Retry
    Success --> [*]`
  },
  {
    id: 'state-game-character',
    title: 'Game Character States',
    description: 'Player character state machine',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Idle
    Idle --> Walking : Move
    Idle --> Jumping : Jump
    Idle --> Attacking : Attack
    Walking --> Idle : Stop
    Walking --> Running : Sprint
    Walking --> Jumping : Jump
    Running --> Walking : SlowDown
    Running --> Jumping : Jump
    Jumping --> Falling : Peak
    Falling --> Idle : Land
    Falling --> Hurt : TakeDamage
    Attacking --> Idle : Complete
    Hurt --> Idle : Recover
    Hurt --> Dead : HealthZero
    Dead --> [*]`
  },
  {
    id: 'state-video-player',
    title: 'Video Player States',
    description: 'Media player state machine',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Unloaded
    Unloaded --> Loading : Load
    Loading --> Ready : Loaded
    Loading --> Error : Failed
    Ready --> Playing : Play
    Playing --> Paused : Pause
    Paused --> Playing : Resume
    Playing --> Buffering : Buffer
    Buffering --> Playing : Buffered
    Playing --> Ended : Complete
    Paused --> Ended : Skip
    Playing --> Ready : Stop
    Paused --> Ready : Stop
    Ended --> Playing : Replay
    Ended --> Ready : Load
    Error --> Loading : Retry`
  },
  {
    id: 'state-elevator',
    title: 'Elevator Controller',
    description: 'Elevator system states',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Idle
    
    state Idle {
        [*] --> DoorsOpen
        DoorsOpen --> DoorsClosing : Timer
        DoorsClosing --> DoorsClosed : Complete
    }
    
    Idle --> MovingUp : CallAbove
    Idle --> MovingDown : CallBelow
    
    state MovingUp {
        [*] --> Ascending
        Ascending --> Arriving : AtFloor
        Arriving --> Stopped : Stop
    }
    
    state MovingDown {
        [*] --> Descending
        Descending --> Arriving2 : AtFloor
        Arriving2 --> Stopped2 : Stop
    }
    
    MovingUp --> Idle : Arrived
    MovingDown --> Idle : Arrived`
  },
  {
    id: 'state-shopping-cart',
    title: 'Shopping Cart States',
    description: 'E-commerce cart lifecycle',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Empty
    Empty --> Active : AddItem
    Active --> Empty : RemoveAll
    Active --> Active : AddItem
    Active --> Active : UpdateQty
    Active --> CheckingOut : Checkout
    CheckingOut --> Active : EditCart
    CheckingOut --> PaymentPending : ConfirmOrder
    PaymentPending --> Active : PaymentFailed
    PaymentPending --> Completed : PaymentSuccess
    Completed --> [*]
    
    Active --> Abandoned : Timeout
    Abandoned --> Active : Return
    Abandoned --> [*] : Expire`
  },
  {
    id: 'state-deployment',
    title: 'Deployment States',
    description: 'Application deployment pipeline',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Queued
    Queued --> Building : StartBuild
    Building --> Testing : BuildSuccess
    Building --> Failed : BuildError
    Testing --> Staging : TestsPassed
    Testing --> Failed : TestsFailed
    Staging --> Approving : DeployedToStaging
    Approving --> Production : Approved
    Approving --> Staging : Rejected
    Production --> Live : HealthCheck
    Production --> RollingBack : HealthFailed
    RollingBack --> Previous : Complete
    Previous --> [*]
    Live --> [*]
    Failed --> Queued : Retry
    Failed --> [*] : Cancel`
  },
  {
    id: 'state-interview',
    title: 'Interview Process',
    description: 'Job application stages',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Applied
    Applied --> Screening : Review
    Applied --> Rejected : NotQualified
    Screening --> PhoneInterview : Shortlisted
    Screening --> Rejected : NotFit
    PhoneInterview --> TechnicalRound : PassedPhone
    PhoneInterview --> Rejected : FailedPhone
    TechnicalRound --> OnsiteInterview : PassedTech
    TechnicalRound --> Rejected : FailedTech
    OnsiteInterview --> OfferPending : PassedOnsite
    OnsiteInterview --> Rejected : FailedOnsite
    OfferPending --> OfferSent : CreateOffer
    OfferSent --> Hired : Accepted
    OfferSent --> Rejected : Declined
    Hired --> [*]
    Rejected --> [*]`
  },
  {
    id: 'state-circuit-breaker',
    title: 'Circuit Breaker States',
    description: 'Fault tolerance pattern states',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Closed
    
    Closed --> Closed : Success
    Closed --> Open : FailureThreshold
    
    Open --> HalfOpen : Timeout
    
    HalfOpen --> Closed : ProbeSuccess
    HalfOpen --> Open : ProbeFailure
    
    note right of Closed
        All requests pass through
        Failures are counted
    end note
    
    note right of Open
        Requests fail fast
        Timer running
    end note
    
    note right of HalfOpen
        Limited requests allowed
        Testing recovery
    end note`
  },

  // =============================================
  // NEW GANTT CHARTS (8 more templates)
  // =============================================
  {
    id: 'gantt-quarterly-roadmap',
    title: 'Quarterly Product Roadmap',
    description: 'Q1 product development plan',
    category: 'gantt',
    code: `gantt
    title Q1 2024 Product Roadmap
    dateFormat YYYY-MM-DD
    section Core Platform
        Authentication v2      :crit, auth, 2024-01-01, 3w
        Payment Integration    :pay, after auth, 4w
        Multi-tenant Support   :tenant, after pay, 3w
    section Mobile App
        iOS Development        :ios, 2024-01-08, 6w
        Android Development    :android, 2024-01-08, 6w
        App Store Release      :milestone, after ios, 0d
    section Analytics
        Dashboard Redesign     :dash, 2024-01-15, 4w
        Custom Reports         :reports, after dash, 3w
    section Infrastructure
        K8s Migration          :k8s, 2024-01-01, 8w
        CDN Setup              :cdn, after k8s, 1w`
  },
  {
    id: 'gantt-product-launch',
    title: 'Product Launch Plan',
    description: 'Go-to-market launch timeline',
    category: 'gantt',
    code: `gantt
    title Product Launch Plan
    dateFormat YYYY-MM-DD
    section Pre-Launch
        Feature Freeze         :done, freeze, 2024-01-01, 1d
        QA & Bug Fixes         :active, qa, after freeze, 2w
        Documentation          :docs, after freeze, 2w
        Beta Testing           :beta, after qa, 1w
    section Marketing
        Press Kit              :press, 2024-01-08, 1w
        Influencer Outreach    :influencer, after press, 2w
        PR Campaign            :pr, after influencer, 1w
    section Launch Week
        Soft Launch            :soft, after beta, 2d
        Full Launch            :crit, launch, after soft, 1d
        Support Standby        :support, after launch, 1w
    section Post-Launch
        Analytics Review       :analytics, after support, 1w
        Hotfix Sprint          :hotfix, after launch, 2w`
  },
  {
    id: 'gantt-agile-sprint',
    title: 'Two-Week Sprint',
    description: 'Agile sprint with ceremonies',
    category: 'gantt',
    code: `gantt
    title Sprint 14 - User Management
    dateFormat YYYY-MM-DD
    section Ceremonies
        Sprint Planning        :plan, 2024-01-15, 4h
        Daily Standups         :daily, 2024-01-15, 10d
        Sprint Review          :review, 2024-01-26, 2h
        Retrospective          :retro, 2024-01-26, 1h
    section User Stories
        US-101 User Profile    :active, us101, 2024-01-15, 3d
        US-102 Avatar Upload   :us102, after us101, 2d
        US-103 Role Management :us103, 2024-01-17, 4d
        US-104 Bulk Import     :us104, after us103, 3d
    section Tech Tasks
        DB Migration           :crit, db, 2024-01-15, 1d
        API Documentation      :api, 2024-01-22, 2d`
  },
  {
    id: 'gantt-migration-project',
    title: 'Cloud Migration Project',
    description: 'On-prem to cloud migration timeline',
    category: 'gantt',
    code: `gantt
    title AWS Cloud Migration
    dateFormat YYYY-MM-DD
    section Assessment
        Current State Analysis :assess, 2024-01-01, 2w
        Cost Modeling          :cost, after assess, 1w
        Architecture Design    :arch, after cost, 2w
    section Preparation  
        VPC Setup              :vpc, after arch, 1w
        Security Groups        :security, after vpc, 1w
        IAM Configuration      :iam, after vpc, 1w
    section Migration
        Database Migration     :crit, dbmig, after security, 2w
        Application Migration  :appmig, after dbmig, 3w
        Data Validation        :valid, after appmig, 1w
    section Cutover
        DNS Cutover            :crit, dns, after valid, 1d
        Monitoring Setup       :monitor, after dns, 3d
        Decommission On-prem   :decom, after monitor, 2w`
  },
  {
    id: 'gantt-security-audit',
    title: 'Security Audit Timeline',
    description: 'Security assessment project plan',
    category: 'gantt',
    code: `gantt
    title Security Audit Q1
    dateFormat YYYY-MM-DD
    section Planning
        Scope Definition       :scope, 2024-01-01, 3d
        Tool Setup             :tools, after scope, 2d
    section Assessment
        Vulnerability Scan     :vuln, after tools, 1w
        Penetration Testing    :crit, pentest, after vuln, 2w
        Code Review            :code, after tools, 2w
        Config Audit           :config, after tools, 1w
    section Remediation
        Critical Fixes         :crit, critical, after pentest, 1w
        High Priority          :high, after critical, 2w
        Medium Priority        :medium, after high, 2w
    section Validation
        Re-testing             :retest, after medium, 1w
        Final Report           :report, after retest, 3d
        Exec Presentation      :milestone, after report, 0d`
  },
  {
    id: 'gantt-feature-release',
    title: 'Feature Release Cycle',
    description: 'Single feature development to release',
    category: 'gantt',
    code: `gantt
    title Feature: Real-time Notifications
    dateFormat YYYY-MM-DD
    section Design
        User Research          :research, 2024-01-01, 5d
        UI Mockups             :mockup, after research, 3d
        Technical Design       :techdesign, after mockup, 2d
        Design Review          :milestone, after techdesign, 0d
    section Development
        Backend WebSocket      :backend, after techdesign, 5d
        Frontend Components    :frontend, after techdesign, 5d
        Integration            :integrate, after backend, 3d
    section Quality
        Unit Tests             :unit, after frontend, 2d
        E2E Tests              :e2e, after integrate, 3d
        Performance Testing    :perf, after e2e, 2d
    section Release
        Staged Rollout         :rollout, after perf, 5d
        GA Release             :milestone, after rollout, 0d`
  },
  {
    id: 'gantt-hackathon',
    title: 'Hackathon Schedule',
    description: '48-hour hackathon timeline',
    category: 'gantt',
    code: `gantt
    title Company Hackathon 2024
    dateFormat YYYY-MM-DD HH:mm
    axisFormat %H:%M
    section Day 1
        Registration           :reg, 2024-03-15 09:00, 1h
        Kickoff & Rules        :kick, after reg, 30m
        Team Formation         :team, after kick, 1h
        Ideation               :idea, after team, 2h
        Lunch                  :lunch1, after idea, 1h
        Development Sprint 1   :dev1, after lunch1, 6h
        Dinner & Networking    :dinner, after dev1, 2h
    section Day 2
        Development Sprint 2   :dev2, 2024-03-16 09:00, 4h
        Lunch                  :lunch2, after dev2, 1h
        Final Sprint           :dev3, after lunch2, 3h
        Code Freeze            :crit, freeze, after dev3, 0m
        Presentations          :present, after freeze, 2h
        Judging & Awards       :awards, after present, 1h`
  },
  {
    id: 'gantt-website-redesign',
    title: 'Website Redesign Project',
    description: 'Corporate website overhaul plan',
    category: 'gantt',
    code: `gantt
    title Website Redesign 2024
    dateFormat YYYY-MM-DD
    section Discovery
        Stakeholder Interviews :interviews, 2024-01-01, 1w
        Analytics Review       :analytics, 2024-01-01, 1w
        Competitor Analysis    :competitor, after analytics, 1w
        Content Audit          :content, after interviews, 2w
    section Design
        Wireframes             :wireframe, after content, 2w
        Visual Design          :visual, after wireframe, 3w
        Prototype              :proto, after visual, 1w
        User Testing           :usertest, after proto, 1w
    section Development
        CMS Setup              :cms, after visual, 1w
        Frontend Build         :fe, after proto, 4w
        Content Migration      :migrate, after cms, 3w
    section Launch
        QA Testing             :qa, after fe, 2w
        SEO Optimization       :seo, after migrate, 1w
        Go Live                :crit, live, after qa, 1d`
  },

  // =============================================
  // NEW ER DIAGRAMS (9 more templates)
  // =============================================
  {
    id: 'er-multi-tenant',
    title: 'Multi-Tenant SaaS',
    description: 'SaaS multi-tenancy schema',
    category: 'er',
    code: `erDiagram
    TENANT ||--o{ USER : has
    TENANT ||--o{ SUBSCRIPTION : subscribes
    TENANT ||--o{ WORKSPACE : owns
    USER ||--o{ WORKSPACE_MEMBER : joins
    WORKSPACE ||--o{ WORKSPACE_MEMBER : contains
    WORKSPACE ||--o{ PROJECT : contains
    SUBSCRIPTION ||--|| PLAN : uses
    TENANT {
        uuid id PK
        string name
        string subdomain UK
        string status
    }
    USER {
        uuid id PK
        uuid tenant_id FK
        string email UK
        string role
    }
    WORKSPACE {
        uuid id PK
        uuid tenant_id FK
        string name
    }
    PLAN {
        int id PK
        string name
        decimal price
        int user_limit
    }
    SUBSCRIPTION {
        uuid id PK
        date start_date
        date end_date
        string status
    }`
  },
  {
    id: 'er-ecommerce-full',
    title: 'E-Commerce Full Schema',
    description: 'Complete online store database',
    category: 'er',
    code: `erDiagram
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER ||--o{ ADDRESS : has
    CUSTOMER ||--o{ WISHLIST_ITEM : saves
    ORDER ||--|{ ORDER_ITEM : contains
    ORDER ||--|| PAYMENT : has
    ORDER ||--o| SHIPPING : tracked
    PRODUCT ||--o{ ORDER_ITEM : ordered
    PRODUCT ||--o{ WISHLIST_ITEM : wishlisted
    PRODUCT }o--|| CATEGORY : belongs
    PRODUCT ||--o{ REVIEW : receives
    PRODUCT ||--o{ INVENTORY : stocked
    CUSTOMER ||--o{ REVIEW : writes
    CUSTOMER {
        int id PK
        string email UK
        string password_hash
        datetime created_at
    }
    PRODUCT {
        int id PK
        string sku UK
        string name
        decimal price
        text description
    }
    ORDER {
        int id PK
        int customer_id FK
        decimal total
        string status
        datetime ordered_at
    }
    INVENTORY {
        int product_id PK,FK
        int warehouse_id PK,FK
        int quantity
        int reserved
    }`
  },
  {
    id: 'er-crm-full',
    title: 'CRM Complete Schema',
    description: 'Sales CRM with activities',
    category: 'er',
    code: `erDiagram
    COMPANY ||--o{ CONTACT : employs
    COMPANY ||--o{ DEAL : involves
    CONTACT ||--o{ DEAL : participates
    DEAL ||--o{ ACTIVITY : has
    DEAL ||--o{ STAGE_HISTORY : tracks
    USER ||--o{ DEAL : owns
    USER ||--o{ ACTIVITY : logs
    PIPELINE ||--|{ STAGE : contains
    DEAL }o--|| STAGE : currentlyIn
    COMPANY {
        int id PK
        string name
        string industry
        string website
        int employee_count
    }
    CONTACT {
        int id PK
        int company_id FK
        string name
        string email
        string phone
        string title
    }
    DEAL {
        int id PK
        string title
        decimal value
        int probability
        date expected_close
    }
    ACTIVITY {
        int id PK
        string type
        text notes
        datetime scheduled
        bool completed
    }
    PIPELINE {
        int id PK
        string name
    }
    STAGE {
        int id PK
        string name
        int position
    }`
  },
  {
    id: 'er-content-management',
    title: 'CMS Database',
    description: 'Content management system schema',
    category: 'er',
    code: `erDiagram
    USER ||--o{ CONTENT : creates
    CONTENT ||--o{ REVISION : hasVersions
    CONTENT }o--o{ TAG : tagged
    CONTENT }o--|| CONTENT_TYPE : isType
    CONTENT ||--o{ MEDIA : includes
    CONTENT }o--o| CONTENT : parent
    USER ||--o{ COMMENT : writes
    CONTENT ||--o{ COMMENT : receives
    USER {
        int id PK
        string username UK
        string email UK
        string role
    }
    CONTENT {
        int id PK
        string slug UK
        string title
        text body
        string status
        datetime published_at
    }
    REVISION {
        int id PK
        int content_id FK
        text body
        int version
        datetime created_at
    }
    CONTENT_TYPE {
        int id PK
        string name
        json schema
    }
    MEDIA {
        int id PK
        string url
        string mime_type
        int size_bytes
    }`
  },
  {
    id: 'er-event-booking',
    title: 'Event Booking System',
    description: 'Event tickets and reservations',
    category: 'er',
    code: `erDiagram
    EVENT ||--|{ TICKET_TYPE : offers
    EVENT ||--o{ SESSION : hasSchedule
    VENUE ||--o{ EVENT : hosts
    CUSTOMER ||--o{ BOOKING : makes
    BOOKING ||--|{ TICKET : contains
    TICKET }o--|| TICKET_TYPE : isType
    TICKET }o--o| SESSION : forSession
    BOOKING ||--|| PAYMENT : paidBy
    EVENT {
        int id PK
        string name
        text description
        date start_date
        date end_date
    }
    VENUE {
        int id PK
        string name
        string address
        int capacity
    }
    TICKET_TYPE {
        int id PK
        string name
        decimal price
        int quantity_available
    }
    BOOKING {
        int id PK
        string reference UK
        decimal total
        datetime booked_at
        string status
    }
    SESSION {
        int id PK
        datetime start_time
        datetime end_time
        string room
    }`
  },
  {
    id: 'er-logistics',
    title: 'Logistics & Shipping',
    description: 'Supply chain management schema',
    category: 'er',
    code: `erDiagram
    SHIPMENT ||--|{ PACKAGE : contains
    SHIPMENT ||--o{ TRACKING_EVENT : tracked
    SHIPMENT }o--|| CARRIER : shippedBy
    WAREHOUSE ||--o{ INVENTORY : stores
    PRODUCT ||--o{ INVENTORY : stocked
    PACKAGE ||--|{ PACKAGE_ITEM : holds
    PRODUCT ||--o{ PACKAGE_ITEM : packed
    ORDER ||--|| SHIPMENT : fulfilledBy
    SHIPMENT {
        int id PK
        string tracking_number UK
        int origin_warehouse FK
        string destination_address
        datetime shipped_at
        datetime delivered_at
    }
    PACKAGE {
        int id PK
        decimal weight
        string dimensions
    }
    CARRIER {
        int id PK
        string name
        string api_key
    }
    TRACKING_EVENT {
        int id PK
        string status
        string location
        datetime timestamp
    }
    WAREHOUSE {
        int id PK
        string name
        string address
        string region
    }`
  },
  {
    id: 'er-healthcare',
    title: 'Healthcare EHR',
    description: 'Electronic health records schema',
    category: 'er',
    code: `erDiagram
    PATIENT ||--o{ ENCOUNTER : visits
    PROVIDER ||--o{ ENCOUNTER : conducts
    ENCOUNTER ||--o{ DIAGNOSIS : produces
    ENCOUNTER ||--o{ PRESCRIPTION : results
    PRESCRIPTION ||--|| MEDICATION : prescribes
    PATIENT ||--o{ INSURANCE : coveredBy
    ENCOUNTER ||--o{ LAB_ORDER : orders
    LAB_ORDER ||--|{ LAB_RESULT : generates
    PATIENT {
        int id PK
        string mrn UK
        string first_name
        string last_name
        date dob
        string blood_type
    }
    PROVIDER {
        int id PK
        string npi UK
        string name
        string specialty
    }
    ENCOUNTER {
        int id PK
        datetime visit_date
        string type
        text chief_complaint
        text notes
    }
    DIAGNOSIS {
        int id PK
        string icd_code
        string description
        string status
    }
    MEDICATION {
        int id PK
        string ndc_code UK
        string name
        string form
    }`
  },
  {
    id: 'er-gaming',
    title: 'Online Gaming Platform',
    description: 'Game user and progress schema',
    category: 'er',
    code: `erDiagram
    PLAYER ||--o{ CHARACTER : owns
    PLAYER ||--o{ PURCHASE : makes
    CHARACTER ||--o{ INVENTORY_SLOT : has
    ITEM ||--o{ INVENTORY_SLOT : stored
    CHARACTER ||--o{ QUEST_PROGRESS : tracks
    QUEST ||--o{ QUEST_PROGRESS : tracked
    GUILD ||--o{ GUILD_MEMBER : contains
    CHARACTER ||--o| GUILD_MEMBER : joins
    PLAYER {
        int id PK
        string username UK
        string email UK
        decimal balance
        datetime last_login
    }
    CHARACTER {
        int id PK
        string name
        int level
        int experience
        string class
    }
    ITEM {
        int id PK
        string name
        string rarity
        int power
        string type
    }
    QUEST {
        int id PK
        string name
        int min_level
        int reward_exp
    }
    GUILD {
        int id PK
        string name UK
        int level
        datetime created_at
    }`
  },
  {
    id: 'er-iot-platform',
    title: 'IoT Device Platform',
    description: 'IoT device management schema',
    category: 'er',
    code: `erDiagram
    ORGANIZATION ||--o{ DEVICE : owns
    DEVICE ||--o{ TELEMETRY : sends
    DEVICE ||--o{ ALERT : triggers
    DEVICE }o--|| DEVICE_TYPE : isType
    DEVICE ||--o{ COMMAND : receives
    ORGANIZATION ||--o{ USER : contains
    USER ||--o{ COMMAND : issues
    DEVICE_TYPE ||--o{ ATTRIBUTE_DEF : defines
    DEVICE {
        uuid id PK
        string serial_number UK
        string name
        string status
        datetime last_seen
        json metadata
    }
    TELEMETRY {
        bigint id PK
        uuid device_id FK
        datetime timestamp
        string metric_name
        double value
    }
    ALERT {
        int id PK
        string severity
        string message
        datetime triggered_at
        bool acknowledged
    }
    DEVICE_TYPE {
        int id PK
        string name
        string manufacturer
        json capabilities
    }
    COMMAND {
        int id PK
        string action
        json parameters
        string status
    }`
  },

  // =============================================
  // NEW PIE CHARTS (7 more templates)
  // =============================================
  {
    id: 'pie-sprint-velocity',
    title: 'Sprint Completion',
    description: 'Sprint story points breakdown',
    category: 'pie',
    code: `pie showData
    title Sprint 14 Story Points
    "Completed" : 34
    "In Progress" : 8
    "Blocked" : 5
    "Not Started" : 13`
  },
  {
    id: 'pie-revenue-streams',
    title: 'Revenue Streams',
    description: 'Company revenue by source',
    category: 'pie',
    code: `pie showData
    title Revenue by Stream
    "Subscriptions" : 52
    "Enterprise Licenses" : 23
    "Professional Services" : 15
    "Training" : 7
    "Support Contracts" : 3`
  },
  {
    id: 'pie-incident-severity',
    title: 'Incident Severity',
    description: 'Production incidents by severity',
    category: 'pie',
    code: `pie showData
    title Q1 Incidents by Severity
    "Critical (P1)" : 3
    "High (P2)" : 12
    "Medium (P3)" : 28
    "Low (P4)" : 47`
  },
  {
    id: 'pie-cloud-cost',
    title: 'Cloud Cost Breakdown',
    description: 'Monthly cloud spending by service',
    category: 'pie',
    code: `pie showData
    title AWS Monthly Cost
    "EC2 Compute" : 35
    "RDS Database" : 22
    "S3 Storage" : 12
    "CloudFront CDN" : 10
    "Lambda Functions" : 8
    "Other Services" : 13`
  },
  {
    id: 'pie-customer-segments',
    title: 'Customer Segments',
    description: 'Customer distribution by tier',
    category: 'pie',
    code: `pie showData
    title Customers by Plan
    "Enterprise" : 12
    "Business" : 28
    "Professional" : 35
    "Starter" : 18
    "Free Trial" : 7`
  },
  {
    id: 'pie-bug-categories',
    title: 'Bug Categories',
    description: 'Bugs by component area',
    category: 'pie',
    code: `pie showData
    title Bugs by Component
    "UI/Frontend" : 32
    "API/Backend" : 26
    "Database" : 14
    "Authentication" : 11
    "Integration" : 9
    "Performance" : 8`
  },
  {
    id: 'pie-employee-distribution',
    title: 'Team Distribution',
    description: 'Employees by department',
    category: 'pie',
    code: `pie showData
    title Headcount by Department
    "Engineering" : 45
    "Product" : 12
    "Sales" : 18
    "Marketing" : 10
    "Customer Success" : 8
    "HR & Admin" : 7`
  },

  // =============================================
  // NEW MINDMAPS (8 more templates)
  // =============================================
  {
    id: 'mindmap-risk-analysis',
    title: 'Risk Analysis',
    description: 'Project risk assessment map',
    category: 'mindmap',
    code: `mindmap
    root((Project Risks))
        Technical
            Legacy System Integration
            Scalability Concerns
            Security Vulnerabilities
            Technical Debt
        Resource
            Key Person Dependency
            Skill Gaps
            Budget Constraints
            Timeline Pressure
        External
            Vendor Dependencies
            Regulatory Changes
            Market Shifts
            Competitor Actions
        Organizational
            Stakeholder Alignment
            Change Resistance
            Communication Gaps
            Scope Creep`
  },
  {
    id: 'mindmap-devops-skills',
    title: 'DevOps Learning Path',
    description: 'DevOps engineer skill tree',
    category: 'mindmap',
    code: `mindmap
    root((DevOps))
        Linux
            Command Line
            Shell Scripting
            System Admin
        Containers
            Docker
            Kubernetes
            Helm
            Service Mesh
        CI/CD
            GitHub Actions
            Jenkins
            ArgoCD
            GitOps
        Cloud
            AWS
            Azure
            GCP
            Terraform
        Monitoring
            Prometheus
            Grafana
            ELK Stack
            Datadog
        Security
            SAST/DAST
            Secrets Management
            Compliance`
  },
  {
    id: 'mindmap-product-discovery',
    title: 'Product Discovery',
    description: 'Feature discovery process',
    category: 'mindmap',
    code: `mindmap
    root((Discovery))
        Research
            User Interviews
            Surveys
            Analytics
            Competitor Analysis
        Define
            Problem Statement
            User Personas
            Jobs to Be Done
            Success Metrics
        Ideate
            Brainstorming
            Design Studio
            Crazy 8s
            Dot Voting
        Validate
            Prototype
            User Testing
            A/B Tests
            Pilot Program
        Deliver
            MVP Scope
            Roadmap
            Dependencies
            Rollout Plan`
  },
  {
    id: 'mindmap-incident-management',
    title: 'Incident Management',
    description: 'Incident response framework',
    category: 'mindmap',
    code: `mindmap
    root((Incident Response))
        Detection
            Monitoring Alerts
            User Reports
            Automated Checks
            Log Analysis
        Triage
            Severity Assessment
            Impact Analysis
            Team Assignment
            Communication
        Resolution
            Investigation
            Root Cause
            Fix Implementation
            Verification
        Recovery
            Service Restoration
            Data Recovery
            Customer Notice
            Status Update
        Post-Mortem
            Timeline
            What Went Wrong
            What Went Right
            Action Items`
  },
  {
    id: 'mindmap-microservices',
    title: 'Microservices Architecture',
    description: 'Microservices design considerations',
    category: 'mindmap',
    code: `mindmap
    root((Microservices))
        Design
            Domain Boundaries
            API Contracts
            Data Ownership
            Event Schemas
        Communication
            REST APIs
            gRPC
            Message Queues
            Event Streams
        Infrastructure
            Containers
            Orchestration
            Service Mesh
            API Gateway
        Observability
            Distributed Tracing
            Centralized Logging
            Metrics
            Health Checks
        Resilience
            Circuit Breakers
            Retries
            Timeouts
            Bulkheads`
  },
  {
    id: 'mindmap-data-strategy',
    title: 'Data Strategy',
    description: 'Enterprise data management',
    category: 'mindmap',
    code: `mindmap
    root((Data Strategy))
        Collection
            Sources
            Ingestion
            ETL/ELT
            Real-time
        Storage
            Data Lake
            Data Warehouse
            Operational DB
            Archive
        Quality
            Validation
            Cleansing
            Deduplication
            Monitoring
        Governance
            Catalog
            Lineage
            Access Control
            Compliance
        Analytics
            BI Dashboards
            Ad-hoc Queries
            ML/AI
            Self-service`
  },
  {
    id: 'mindmap-security-checklist',
    title: 'Security Checklist',
    description: 'Application security considerations',
    category: 'mindmap',
    code: `mindmap
    root((Security))
        Authentication
            OAuth 2.0 / OIDC
            MFA
            Session Management
            Password Policy
        Authorization
            RBAC
            ABAC
            API Scopes
            Resource ACLs
        Data Protection
            Encryption at Rest
            Encryption in Transit
            Key Management
            Data Masking
        Application
            Input Validation
            Output Encoding
            CSRF Protection
            Rate Limiting
        Infrastructure
            Network Segmentation
            WAF
            DDoS Protection
            Patch Management`
  },
  {
    id: 'mindmap-startup-mvp',
    title: 'MVP Planning',
    description: 'Minimum viable product scope',
    category: 'mindmap',
    code: `mindmap
    root((MVP))
        Must Have
            User Registration
            Core Feature 1
            Core Feature 2
            Basic Analytics
        Should Have
            Social Login
            Email Notifications
            Basic Reporting
            Mobile Responsive
        Nice to Have
            Advanced Search
            Integrations
            Custom Branding
            API Access
        Out of Scope
            Native Mobile App
            Multi-language
            Advanced Analytics
            White-labeling
        Validation
            Success Criteria
            User Feedback
            Metrics
            Pivot Triggers`
  },

  // =============================================
  // NEW GIT GRAPHS (7 more templates)
  // =============================================
  {
    id: 'git-gitflow-complete',
    title: 'GitFlow Complete',
    description: 'Full GitFlow branching model',
    category: 'git',
    code: `gitGraph
    commit id: "Initial"
    branch develop
    checkout develop
    commit id: "Dev setup"
    branch feature/login
    commit id: "Login UI"
    commit id: "Login API"
    checkout develop
    branch feature/dashboard
    commit id: "Dashboard"
    checkout develop
    merge feature/login
    merge feature/dashboard
    branch release/1.0
    commit id: "Bump version"
    commit id: "Fix bug"
    checkout main
    merge release/1.0 tag: "v1.0.0"
    checkout develop
    merge release/1.0
    checkout main
    branch hotfix/1.0.1
    commit id: "Critical fix"
    checkout main
    merge hotfix/1.0.1 tag: "v1.0.1"
    checkout develop
    merge hotfix/1.0.1`
  },
  {
    id: 'git-github-flow',
    title: 'GitHub Flow',
    description: 'Simplified GitHub branching',
    category: 'git',
    code: `gitGraph
    commit id: "v1.0"
    branch feature-1
    commit id: "Implement"
    commit id: "Tests"
    checkout main
    merge feature-1 id: "PR #1"
    branch feature-2
    commit id: "New feature"
    checkout main
    branch bugfix
    commit id: "Fix issue"
    checkout main
    merge bugfix id: "PR #2"
    checkout feature-2
    commit id: "More work"
    checkout main
    merge feature-2 id: "PR #3"
    commit id: "Deploy" tag: "v1.1"`
  },
  {
    id: 'git-release-branches',
    title: 'Release Branch Strategy',
    description: 'Long-lived release branches',
    category: 'git',
    code: `gitGraph
    commit id: "Base"
    branch release/2.x
    commit id: "2.0 prep"
    commit id: "2.0.0" tag: "v2.0.0"
    checkout main
    commit id: "3.0 work"
    checkout release/2.x
    commit id: "2.0.1 fix" tag: "v2.0.1"
    checkout main
    commit id: "More 3.0"
    branch release/3.x
    commit id: "3.0 prep"
    commit id: "3.0.0" tag: "v3.0.0"
    checkout release/2.x
    commit id: "2.0.2 fix" tag: "v2.0.2"
    checkout release/3.x
    commit id: "3.0.1 fix" tag: "v3.0.1"`
  },
  {
    id: 'git-monorepo',
    title: 'Monorepo Strategy',
    description: 'Feature branches in monorepo',
    category: 'git',
    code: `gitGraph
    commit id: "Init monorepo"
    branch feature/api-update
    commit id: "API changes"
    checkout main
    branch feature/web-redesign
    commit id: "Web UI"
    commit id: "Web styles"
    checkout main
    branch feature/shared-lib
    commit id: "Shared utils"
    checkout main
    merge feature/shared-lib
    checkout feature/api-update
    commit id: "Use shared"
    checkout main
    merge feature/api-update
    checkout feature/web-redesign
    commit id: "Use shared"
    checkout main
    merge feature/web-redesign tag: "release"`
  },
  {
    id: 'git-squash-merge',
    title: 'Squash Merge Pattern',
    description: 'Clean history with squash',
    category: 'git',
    code: `gitGraph
    commit id: "v1.0"
    branch feature
    commit id: "WIP"
    commit id: "More WIP"
    commit id: "Fix typo"
    commit id: "Cleanup"
    checkout main
    commit id: "Feature A"
    commit id: "v1.1" tag: "v1.1"
    branch feature-2
    commit id: "Draft"
    commit id: "Review fixes"
    checkout main
    commit id: "Feature B"`
  },
  {
    id: 'git-ci-branches',
    title: 'CI/CD Branch Pipeline',
    description: 'Branches with CI environments',
    category: 'git',
    code: `gitGraph
    commit id: "Production" tag: "live"
    branch staging
    commit id: "QA Ready"
    branch develop
    commit id: "Dev work"
    branch feature/new
    commit id: "Feature"
    checkout develop
    merge feature/new
    checkout staging
    merge develop
    checkout main
    merge staging
    commit tag: "v2.0"`
  },
  {
    id: 'git-cherry-pick',
    title: 'Cherry Pick Pattern',
    description: 'Selective commit porting',
    category: 'git',
    code: `gitGraph
    commit id: "v1.0" tag: "v1.0"
    branch develop
    commit id: "Feature A"
    commit id: "Feature B"
    commit id: "Bugfix X"
    commit id: "Feature C"
    checkout main
    branch hotfix
    commit id: "Cherry-pick X"
    checkout main
    merge hotfix tag: "v1.0.1"
    checkout develop
    commit id: "Feature D"
    checkout main
    merge develop tag: "v1.1"`
  },

  // =============================================
  // NEW TEMPLATES (201-250)
  // =============================================

  // FLOWCHARTS - IoT, Mobile, Data Processing, ML
  {
    id: 'template-201',
    title: 'IoT Sensor Data Flow',
    description: 'IoT device data collection and processing pipeline',
    category: 'flowchart',
    code: `flowchart TD
    subgraph Devices
        A[Temperature Sensor] --> B[Edge Gateway]
        C[Humidity Sensor] --> B
        D[Motion Sensor] --> B
    end
    subgraph EdgeProcessing
        B --> E{Data Valid?}
        E -->|No| F[Log Error]
        E -->|Yes| G[Aggregate Data]
        G --> H[Compress Payload]
    end
    subgraph Cloud
        H --> I[MQTT Broker]
        I --> J[Stream Processor]
        J --> K[Time Series DB]
        J --> L[Real-time Dashboard]
        K --> M[Analytics Engine]
        M --> N[Alert Service]
    end`
  },
  {
    id: 'template-202',
    title: 'Mobile App Permission Flow',
    description: 'Handling runtime permissions in mobile apps',
    category: 'flowchart',
    code: `flowchart TD
    A[Feature Requested] --> B{Permission Granted?}
    B -->|Yes| C[Execute Feature]
    B -->|No| D{First Time Request?}
    D -->|Yes| E[Show Rationale]
    E --> F[Request Permission]
    D -->|No| G{Permanently Denied?}
    G -->|Yes| H[Show Settings Prompt]
    H --> I{User Opens Settings?}
    I -->|Yes| J[Open App Settings]
    I -->|No| K[Feature Disabled]
    G -->|No| F
    F --> L{Permission Result}
    L -->|Granted| C
    L -->|Denied| M[Track Denial]
    M --> K`
  },
  {
    id: 'template-203',
    title: 'ETL Data Pipeline',
    description: 'Extract Transform Load data processing workflow',
    category: 'flowchart',
    code: `flowchart LR
    subgraph Extract
        A[(MySQL)] --> D[Extract Job]
        B[(MongoDB)] --> D
        C[REST API] --> D
    end
    subgraph Transform
        D --> E[Data Validation]
        E --> F{Valid?}
        F -->|No| G[Quarantine]
        F -->|Yes| H[Normalize Schema]
        H --> I[Apply Business Rules]
        I --> J[Data Enrichment]
        J --> K[Deduplication]
    end
    subgraph Load
        K --> L[Staging Tables]
        L --> M{Tests Pass?}
        M -->|Yes| N[Production DW]
        M -->|No| O[Rollback]
        N --> P[Update Metadata]
    end`
  },
  {
    id: 'template-204',
    title: 'ML Model Inference Pipeline',
    description: 'Real-time ML model serving workflow',
    category: 'flowchart',
    code: `flowchart TD
    A[API Request] --> B[Feature Extraction]
    B --> C[Input Validation]
    C --> D{Valid Input?}
    D -->|No| E[Return Error]
    D -->|Yes| F[Feature Normalization]
    F --> G[Model Registry]
    G --> H{Model Version Check}
    H --> I[Load Model]
    I --> J[Run Inference]
    J --> K{Confidence > Threshold?}
    K -->|Yes| L[Return Prediction]
    K -->|No| M[Flag for Review]
    M --> N[Fallback Response]
    L --> O[Log Prediction]
    N --> O
    O --> P[Update Metrics]`
  },
  {
    id: 'template-205',
    title: 'Chatbot Conversation Flow',
    description: 'AI chatbot dialog management system',
    category: 'flowchart',
    code: `flowchart TD
    A[User Message] --> B[NLU Processing]
    B --> C[Intent Classification]
    C --> D{Intent Detected?}
    D -->|No| E[Fallback Handler]
    E --> F[Clarification Request]
    D -->|Yes| G[Entity Extraction]
    G --> H{Entities Complete?}
    H -->|No| I[Slot Filling]
    I --> J[Generate Question]
    J --> K[Wait for Response]
    K --> A
    H -->|Yes| L[Context Management]
    L --> M[Dialog Policy]
    M --> N[Response Generation]
    N --> O[Sentiment Analysis]
    O --> P[Deliver Response]
    P --> Q[Update History]`
  },
  {
    id: 'template-206',
    title: 'Smart Home Automation Flow',
    description: 'Home automation event processing logic',
    category: 'flowchart',
    code: `flowchart TD
    A[Trigger Event] --> B{Event Type?}
    B -->|Schedule| C[Check Time Rules]
    B -->|Sensor| D[Read Sensor Data]
    B -->|Manual| E[User Command]
    C --> F{Condition Met?}
    D --> G[Compare Threshold]
    E --> H[Parse Command]
    G --> F
    H --> F
    F -->|No| I[Log Event]
    F -->|Yes| J[Queue Actions]
    J --> K[Check Device Status]
    K --> L{Device Online?}
    L -->|No| M[Retry Queue]
    L -->|Yes| N[Send Command]
    N --> O[Verify Execution]
    O --> P[Update State]
    P --> Q[Notify User]`
  },

  // SEQUENCE DIAGRAMS - gRPC, Caching, Load Balancing
  {
    id: 'template-207',
    title: 'gRPC Bidirectional Streaming',
    description: 'Real-time bidirectional gRPC communication',
    category: 'sequence',
    code: `sequenceDiagram
    participant Client
    participant Server
    participant StreamManager

    Client->>Server: OpenStream()
    Server->>StreamManager: CreateSession
    StreamManager-->>Server: SessionID

    loop Bidirectional
        par Client to Server
            Client->>Server: SendMessage(data)
            Server->>StreamManager: ProcessMessage
        and Server to Client
            StreamManager->>Server: QueuedResponse
            Server->>Client: ReceiveMessage(response)
        end
    end

    Client->>Server: CloseStream()
    Server->>StreamManager: EndSession
    Server-->>Client: StreamClosed`
  },
  {
    id: 'template-208',
    title: 'Redis Cache-Aside Pattern',
    description: 'Cache-aside caching strategy with Redis',
    category: 'sequence',
    code: `sequenceDiagram
    participant App
    participant Redis
    participant Database

    App->>Redis: GET user:123
    alt Cache Hit
        Redis-->>App: UserData (cached)
    else Cache Miss
        Redis-->>App: null
        App->>Database: SELECT * FROM users WHERE id=123
        Database-->>App: UserData
        App->>Redis: SETEX user:123 3600 UserData
        Redis-->>App: OK
    end

    Note over App,Redis: Write-through on update
    App->>Database: UPDATE users SET name='New'
    Database-->>App: Success
    App->>Redis: DEL user:123
    Redis-->>App: Invalidated`
  },
  {
    id: 'template-209',
    title: 'Load Balancer Health Check',
    description: 'Health check and traffic routing with load balancer',
    category: 'sequence',
    code: `sequenceDiagram
    participant LB as Load Balancer
    participant S1 as Server 1
    participant S2 as Server 2
    participant S3 as Server 3

    loop Every 10s
        LB->>S1: /health
        S1-->>LB: 200 OK
        LB->>S2: /health
        S2-->>LB: 200 OK
        LB->>S3: /health
        S3-->>LB: 503 Error
        Note over LB,S3: Mark S3 unhealthy
    end

    LB->>S1: Request (round-robin)
    S1-->>LB: Response
    LB->>S2: Request
    S2-->>LB: Response
    Note over LB: Skip S3
    LB->>S1: Request
    S1-->>LB: Response

    S3-->>LB: 200 OK (recovered)
    Note over LB,S3: Mark S3 healthy`
  },
  {
    id: 'template-210',
    title: 'Message Queue with Dead Letter',
    description: 'Message processing with retry and DLQ',
    category: 'sequence',
    code: `sequenceDiagram
    participant Producer
    participant Queue
    participant Consumer
    participant DLQ as Dead Letter Queue
    participant AlertService

    Producer->>Queue: PublishMessage
    Queue->>Consumer: DeliverMessage

    alt Processing Success
        Consumer-->>Queue: ACK
    else Processing Failed
        Consumer-->>Queue: NACK
        Note over Queue: Attempt 1 of 3
        Queue->>Consumer: Redeliver
        Consumer-->>Queue: NACK
        Note over Queue: Attempt 2 of 3
        Queue->>Consumer: Redeliver
        Consumer-->>Queue: NACK
        Note over Queue: Max retries exceeded
        Queue->>DLQ: MoveToDeadLetter
        DLQ->>AlertService: NotifyFailure
    end`
  },
  {
    id: 'template-211',
    title: 'Service Mesh Routing',
    description: 'Istio service mesh traffic management',
    category: 'sequence',
    code: `sequenceDiagram
    participant Client
    participant Ingress as Istio Ingress
    participant Sidecar as Envoy Sidecar
    participant SvcA as Service A
    participant SvcB as Service B v1
    participant SvcB2 as Service B v2

    Client->>Ingress: Request /api
    Ingress->>Sidecar: Route to Service A
    Sidecar->>SvcA: mTLS Request
    SvcA->>Sidecar: Call Service B

    alt Canary (10%)
        Sidecar->>SvcB2: Route to v2
        SvcB2-->>Sidecar: Response
    else Production (90%)
        Sidecar->>SvcB: Route to v1
        SvcB-->>Sidecar: Response
    end

    Sidecar-->>SvcA: Response
    SvcA-->>Sidecar: Final Response
    Sidecar-->>Ingress: Response
    Ingress-->>Client: 200 OK`
  },
  {
    id: 'template-212',
    title: 'API Gateway Rate Limiting',
    description: 'Token bucket rate limiting at API gateway',
    category: 'sequence',
    code: `sequenceDiagram
    participant Client
    participant Gateway
    participant RateLimiter
    participant Backend

    Client->>Gateway: API Request + API Key
    Gateway->>RateLimiter: CheckLimit(apiKey)
    RateLimiter->>RateLimiter: Get Bucket

    alt Tokens Available
        RateLimiter-->>Gateway: Allow (tokens: 99)
        Gateway->>Backend: Forward Request
        Backend-->>Gateway: Response
        Gateway-->>Client: 200 OK + X-RateLimit-Remaining: 99
    else Bucket Empty
        RateLimiter-->>Gateway: Deny (retry: 30s)
        Gateway-->>Client: 429 Too Many Requests
        Note over Client: Retry-After: 30
    end`
  },
  {
    id: 'template-213',
    title: 'Database Read Replica Routing',
    description: 'Read/write splitting with database replicas',
    category: 'sequence',
    code: `sequenceDiagram
    participant App
    participant Router as Connection Router
    participant Primary
    participant Replica1
    participant Replica2

    Note over App,Replica2: Write Operation
    App->>Router: INSERT INTO orders
    Router->>Primary: Execute Write
    Primary-->>Router: Success
    Primary-->>Replica1: Replication
    Primary-->>Replica2: Replication
    Router-->>App: Committed

    Note over App,Replica2: Read Operation
    App->>Router: SELECT * FROM orders
    Router->>Router: Round-robin replica
    Router->>Replica1: Execute Read
    Replica1-->>Router: Results
    Router-->>App: Results

    Note over Router: Replica1 lag detected
    App->>Router: SELECT (consistent)
    Router->>Primary: Force Primary Read
    Primary-->>Router: Results
    Router-->>App: Consistent Results`
  },

  // CLASS DIAGRAMS - Design Patterns
  {
    id: 'template-214',
    title: 'Bridge Pattern',
    description: 'Decouple abstraction from implementation',
    category: 'class',
    code: `classDiagram
    class Shape {
        <<abstract>>
        #renderer: Renderer
        +Shape(renderer: Renderer)
        +draw()*
        +resize(factor: number)*
    }
    class Circle {
        -radius: number
        +draw()
        +resize(factor: number)
    }
    class Rectangle {
        -width: number
        -height: number
        +draw()
        +resize(factor: number)
    }
    class Renderer {
        <<interface>>
        +renderCircle(radius: number)
        +renderRectangle(w: number, h: number)
    }
    class VectorRenderer {
        +renderCircle(radius: number)
        +renderRectangle(w: number, h: number)
    }
    class RasterRenderer {
        +renderCircle(radius: number)
        +renderRectangle(w: number, h: number)
    }
    Shape <|-- Circle
    Shape <|-- Rectangle
    Shape o-- Renderer
    Renderer <|.. VectorRenderer
    Renderer <|.. RasterRenderer`
  },
  {
    id: 'template-215',
    title: 'Prototype Pattern',
    description: 'Clone objects without coupling to their classes',
    category: 'class',
    code: `classDiagram
    class Prototype {
        <<interface>>
        +clone(): Prototype
    }
    class DocumentTemplate {
        -title: string
        -content: string
        -formatting: Formatting
        +clone(): DocumentTemplate
        +setTitle(title: string)
        +setContent(content: string)
    }
    class Formatting {
        -font: string
        -size: number
        -color: string
        +clone(): Formatting
    }
    class PrototypeRegistry {
        -prototypes: Map~string, Prototype~
        +register(key: string, proto: Prototype)
        +get(key: string): Prototype
    }
    Prototype <|.. DocumentTemplate
    Prototype <|.. Formatting
    DocumentTemplate *-- Formatting
    PrototypeRegistry o-- Prototype`
  },
  {
    id: 'template-216',
    title: 'Composite Pattern',
    description: 'Compose objects into tree structures',
    category: 'class',
    code: `classDiagram
    class FileSystemComponent {
        <<abstract>>
        #name: string
        +getName(): string
        +getSize(): number*
        +add(component: FileSystemComponent)
        +remove(component: FileSystemComponent)
        +getChildren(): FileSystemComponent[]
    }
    class File {
        -size: number
        +getSize(): number
    }
    class Directory {
        -children: FileSystemComponent[]
        +getSize(): number
        +add(component: FileSystemComponent)
        +remove(component: FileSystemComponent)
        +getChildren(): FileSystemComponent[]
    }
    class SymbolicLink {
        -target: FileSystemComponent
        +getSize(): number
        +getTarget(): FileSystemComponent
    }
    FileSystemComponent <|-- File
    FileSystemComponent <|-- Directory
    FileSystemComponent <|-- SymbolicLink
    Directory o-- FileSystemComponent
    SymbolicLink --> FileSystemComponent`
  },
  {
    id: 'template-217',
    title: 'Chain of Responsibility',
    description: 'Pass requests along a chain of handlers',
    category: 'class',
    code: `classDiagram
    class Handler {
        <<abstract>>
        #next: Handler
        +setNext(handler: Handler): Handler
        +handle(request: Request)*
    }
    class AuthenticationHandler {
        +handle(request: Request)
        -authenticate(request: Request): boolean
    }
    class AuthorizationHandler {
        +handle(request: Request)
        -authorize(request: Request): boolean
    }
    class ValidationHandler {
        +handle(request: Request)
        -validate(request: Request): boolean
    }
    class RateLimitHandler {
        -requestCounts: Map
        +handle(request: Request)
        -isWithinLimit(request: Request): boolean
    }
    class LoggingHandler {
        -logger: Logger
        +handle(request: Request)
    }
    Handler <|-- AuthenticationHandler
    Handler <|-- AuthorizationHandler
    Handler <|-- ValidationHandler
    Handler <|-- RateLimitHandler
    Handler <|-- LoggingHandler
    Handler --> Handler : next`
  },
  {
    id: 'template-218',
    title: 'Flyweight Pattern',
    description: 'Share common state between multiple objects',
    category: 'class',
    code: `classDiagram
    class TreeFactory {
        -treeTypes: Map~string, TreeType~
        +getTreeType(name: string, color: string, texture: Texture): TreeType
    }
    class TreeType {
        <<flyweight>>
        -name: string
        -color: string
        -texture: Texture
        +draw(canvas: Canvas, x: int, y: int)
    }
    class Tree {
        -x: int
        -y: int
        -type: TreeType
        +draw(canvas: Canvas)
    }
    class Forest {
        -trees: Tree[]
        -factory: TreeFactory
        +plantTree(x: int, y: int, name: string, color: string)
        +draw(canvas: Canvas)
    }
    class Texture {
        -data: byte[]
        +render(x: int, y: int)
    }
    TreeFactory --> TreeType : creates
    TreeType *-- Texture
    Tree --> TreeType
    Forest o-- Tree
    Forest --> TreeFactory`
  },
  {
    id: 'template-219',
    title: 'Memento Pattern',
    description: 'Capture and restore object state',
    category: 'class',
    code: `classDiagram
    class Editor {
        -content: string
        -cursor: Position
        -selection: Selection
        +type(text: string)
        +delete()
        +save(): EditorMemento
        +restore(memento: EditorMemento)
    }
    class EditorMemento {
        <<memento>>
        -content: string
        -cursor: Position
        -selection: Selection
        -timestamp: Date
        +getTimestamp(): Date
    }
    class History {
        -mementos: EditorMemento[]
        -current: int
        +push(memento: EditorMemento)
        +undo(): EditorMemento
        +redo(): EditorMemento
        +canUndo(): boolean
        +canRedo(): boolean
    }
    class EditorUI {
        -editor: Editor
        -history: History
        +onUndo()
        +onRedo()
        +onContentChange()
    }
    Editor --> EditorMemento : creates
    History o-- EditorMemento
    EditorUI --> Editor
    EditorUI --> History`
  },
  {
    id: 'template-220',
    title: 'Event Sourcing Aggregates',
    description: 'Domain model with event sourcing pattern',
    category: 'class',
    code: `classDiagram
    class AggregateRoot {
        <<abstract>>
        #id: UUID
        #version: int
        #uncommittedEvents: DomainEvent[]
        +applyEvent(event: DomainEvent)
        +getUncommittedEvents(): DomainEvent[]
        +clearUncommittedEvents()
        #raise(event: DomainEvent)
    }
    class Order {
        -status: OrderStatus
        -items: OrderItem[]
        -total: Money
        +create(customerId: UUID)
        +addItem(productId: UUID, qty: int)
        +submit()
        +cancel(reason: string)
        -apply(event: OrderCreated)
        -apply(event: ItemAdded)
    }
    class DomainEvent {
        <<interface>>
        +aggregateId: UUID
        +timestamp: Date
        +version: int
    }
    class OrderCreated {
        +customerId: UUID
    }
    class ItemAdded {
        +productId: UUID
        +quantity: int
        +price: Money
    }
    AggregateRoot <|-- Order
    DomainEvent <|.. OrderCreated
    DomainEvent <|.. ItemAdded
    Order --> DomainEvent`
  },

  // STATE DIAGRAMS - Complex workflows
  {
    id: 'template-221',
    title: 'Flight Booking Lifecycle',
    description: 'Complete flight reservation state machine',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Searching

    state Searching {
        [*] --> EnteringDetails
        EnteringDetails --> ShowingResults: search
        ShowingResults --> EnteringDetails: modify
        ShowingResults --> Selected: selectFlight
    }

    Selected --> HoldingPrice: holdPrice
    HoldingPrice --> Expired: timeout_15min
    Expired --> Searching: restart
    HoldingPrice --> EnteringPassenger: continue

    state EnteringPassenger {
        [*] --> PassengerInfo
        PassengerInfo --> SeatSelection: next
        SeatSelection --> Extras: next
    }

    EnteringPassenger --> PaymentPending: proceedToPayment
    PaymentPending --> PaymentFailed: paymentError
    PaymentFailed --> PaymentPending: retry
    PaymentPending --> Confirmed: paymentSuccess

    Confirmed --> CheckedIn: onlineCheckin
    Confirmed --> Cancelled: cancel
    CheckedIn --> Boarded: boardingComplete
    Boarded --> Completed: flightLanded
    Cancelled --> Refunded: processRefund

    Completed --> [*]
    Refunded --> [*]`
  },
  {
    id: 'template-222',
    title: 'Insurance Claim Processing',
    description: 'Insurance claim workflow states',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Submitted

    Submitted --> UnderReview: assignAdjuster
    UnderReview --> DocumentsRequired: requestDocs

    state DocumentsRequired {
        [*] --> AwaitingDocs
        AwaitingDocs --> DocsReceived: uploadDocs
        AwaitingDocs --> Escalated: timeout_30days
    }

    DocumentsRequired --> UnderReview: allDocsReceived
    UnderReview --> Investigation: needsInvestigation
    Investigation --> UnderReview: investigationComplete

    UnderReview --> Approved: approve
    UnderReview --> Denied: deny
    UnderReview --> PartialApproval: partialApprove

    Approved --> PaymentProcessing: initiatePayout
    PartialApproval --> PaymentProcessing: initiatePayout
    PaymentProcessing --> Paid: paymentComplete
    PaymentProcessing --> PaymentFailed: paymentError
    PaymentFailed --> PaymentProcessing: retry

    Denied --> Appeal: fileAppeal
    Appeal --> UnderReview: appealAccepted
    Appeal --> FinalDenial: appealDenied

    Paid --> Closed: acknowledge
    FinalDenial --> Closed: acknowledge
    Closed --> [*]`
  },
  {
    id: 'template-223',
    title: 'Content Publishing Workflow',
    description: 'Editorial content approval process',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Draft

    state Draft {
        [*] --> Writing
        Writing --> WritingReview: selfReview
        WritingReview --> Writing: revise
    }

    Draft --> PendingReview: submitForReview

    state PendingReview {
        [*] --> EditorQueue
        EditorQueue --> EditorReview: assignEditor
    }

    PendingReview --> Draft: requestChanges
    PendingReview --> LeadReview: editorApproved

    LeadReview --> Draft: requestChanges
    LeadReview --> LegalReview: leadApproved
    LegalReview --> Draft: legalIssues
    LegalReview --> Approved: cleared

    Approved --> Scheduled: schedulePublish
    Approved --> Published: publishNow
    Scheduled --> Published: triggerPublish

    Published --> Archived: archive
    Published --> Draft: unpublish

    Archived --> [*]`
  },
  {
    id: 'template-224',
    title: 'User Account Lifecycle',
    description: 'User account states from creation to deletion',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Registered

    Registered --> PendingVerification: sendVerificationEmail
    PendingVerification --> Registered: resendEmail
    PendingVerification --> Active: verifyEmail
    PendingVerification --> Expired: timeout_7days

    Expired --> Deleted: cleanup

    Active --> Suspended: violateTerms
    Active --> Locked: suspiciousActivity
    Active --> Inactive: noActivity_90days

    Locked --> Active: unlockWithMFA
    Locked --> Suspended: failedUnlock_3times

    Suspended --> UnderAppeal: fileAppeal
    UnderAppeal --> Active: appealApproved
    UnderAppeal --> Banned: appealDenied

    Inactive --> Active: login
    Inactive --> MarkedForDeletion: noActivity_1year

    Active --> DeactivationRequested: requestDeactivation
    DeactivationRequested --> Active: cancelDeactivation
    DeactivationRequested --> MarkedForDeletion: confirm

    MarkedForDeletion --> Deleted: gracePeriod_30days

    Deleted --> [*]
    Banned --> [*]`
  },
  {
    id: 'template-225',
    title: 'Vending Machine States',
    description: 'Vending machine operation state machine',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Idle

    Idle --> AcceptingPayment: selectProduct

    state AcceptingPayment {
        [*] --> WaitingForMoney
        WaitingForMoney --> Counting: insertMoney
        Counting --> WaitingForMoney: insufficientFunds
        Counting --> FullAmountReceived: sufficientFunds
    }

    AcceptingPayment --> Idle: cancel
    AcceptingPayment --> Dispensing: paymentComplete

    state Dispensing {
        [*] --> CheckingStock
        CheckingStock --> MovingProduct: inStock
        CheckingStock --> RefundInitiated: outOfStock
        MovingProduct --> ProductReady: dispensed
    }

    Dispensing --> Idle: productTaken
    Dispensing --> ReturningChange: changeRequired

    ReturningChange --> Idle: changeTaken

    state Maintenance {
        [*] --> Restocking
        Restocking --> CoinCollection
        CoinCollection --> Diagnostics
    }

    Idle --> Maintenance: maintenanceKey
    Maintenance --> Idle: exitMaintenance

    Idle --> OutOfService: criticalError
    OutOfService --> Maintenance: technicianArrives`
  },
  {
    id: 'template-226',
    title: 'E-Learning Course Progress',
    description: 'Online course completion states',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Enrolled

    Enrolled --> InProgress: startCourse

    state InProgress {
        [*] --> Module1
        Module1 --> Module1Quiz: completeModule
        Module1Quiz --> Module2: passQuiz
        Module1Quiz --> Module1: failQuiz
        Module2 --> Module2Quiz: completeModule
        Module2Quiz --> Module3: passQuiz
        Module2Quiz --> Module2: failQuiz
        Module3 --> FinalExam: completeModule
    }

    InProgress --> Paused: pauseCourse
    Paused --> InProgress: resumeCourse
    Paused --> Dropped: timeout_60days

    InProgress --> FinalExamReady: allModulesComplete

    FinalExamReady --> TakingExam: startExam

    state TakingExam {
        [*] --> Answering
        Answering --> Reviewing: allAnswered
        Reviewing --> Answering: editAnswers
    }

    TakingExam --> Passed: score_gte_70
    TakingExam --> Failed: score_lt_70

    Failed --> FinalExamReady: retake
    Passed --> CertificateIssued: generateCert

    CertificateIssued --> Completed: downloadCert
    Completed --> [*]
    Dropped --> [*]`
  },

  // GANTT CHARTS - Projects and campaigns
  {
    id: 'template-227',
    title: 'Construction Project Schedule',
    description: 'Building construction phase timeline',
    category: 'gantt',
    code: `gantt
    title Construction Project Timeline
    dateFormat YYYY-MM-DD
    excludes weekends

    section Pre-Construction
    Site Survey          :done, survey, 2026-01-05, 5d
    Permit Applications  :done, permits, after survey, 15d
    Soil Testing         :done, soil, 2026-01-10, 7d
    Architecture Finalize:crit, arch, after permits, 10d

    section Foundation
    Excavation           :exc, after arch, 8d
    Foundation Pour      :crit, found, after exc, 5d
    Curing Period        :cure, after found, 14d

    section Structure
    Steel Framework      :crit, steel, after cure, 20d
    Concrete Floors      :floors, after steel, 15d
    Roofing              :roof, after floors, 10d

    section MEP
    Electrical Rough-in  :elec, after steel, 25d
    Plumbing Rough-in    :plumb, after steel, 20d
    HVAC Installation    :hvac, after roof, 15d

    section Finishing
    Drywall              :dry, after hvac, 12d
    Painting             :paint, after dry, 10d
    Flooring             :floor2, after paint, 8d
    Final Inspection     :milestone, insp, after floor2, 0d`
  },
  {
    id: 'template-228',
    title: 'Marketing Campaign Launch',
    description: 'Integrated marketing campaign timeline',
    category: 'gantt',
    code: `gantt
    title Q2 Marketing Campaign Launch
    dateFormat YYYY-MM-DD

    section Strategy
    Market Research      :research, 2026-03-01, 14d
    Competitor Analysis  :comp, 2026-03-05, 10d
    Campaign Strategy    :crit, strategy, after research, 7d
    Budget Approval      :milestone, budget, after strategy, 0d

    section Creative
    Brand Guidelines     :brand, after budget, 5d
    Content Calendar     :calendar, after strategy, 10d
    Video Production     :crit, video, after brand, 21d
    Graphic Design       :design, after brand, 14d
    Copywriting          :copy, after calendar, 10d

    section Digital
    Landing Pages        :landing, after design, 10d
    Email Templates      :email, after copy, 7d
    Social Media Assets  :social, after design, 7d
    Ad Creatives         :ads, after video, 5d

    section Launch
    Soft Launch          :soft, after landing, 7d
    Influencer Outreach  :influencer, after soft, 14d
    Full Campaign Launch :crit, milestone, launch, after influencer, 0d
    Performance Tracking :tracking, after launch, 30d`
  },
  {
    id: 'template-229',
    title: 'Mobile App Development',
    description: 'iOS/Android app development milestones',
    category: 'gantt',
    code: `gantt
    title Mobile App Development Schedule
    dateFormat YYYY-MM-DD

    section Discovery
    User Research        :research, 2026-02-01, 10d
    Feature Definition   :features, after research, 7d
    Technical Spec       :spec, after features, 5d
    Architecture Design  :crit, arch, after spec, 7d

    section Design
    Wireframes           :wire, after arch, 10d
    UI Design            :ui, after wire, 14d
    Design Review        :milestone, design_rev, after ui, 0d
    Prototype            :proto, after design_rev, 7d

    section Development
    Core Infrastructure  :crit, infra, after arch, 14d
    Authentication Module:auth, after infra, 10d
    Feature Module 1     :feat1, after auth, 14d
    Feature Module 2     :feat2, after auth, 14d
    Feature Module 3     :feat3, after feat1, 10d

    section Testing
    Unit Tests           :unit, after feat2, 7d
    Integration Tests    :integ, after unit, 7d
    UAT                  :uat, after feat3, 10d
    Bug Fixes            :bugs, after uat, 7d

    section Release
    App Store Prep       :store, after bugs, 5d
    Soft Launch          :soft, after store, 7d
    Marketing Launch     :crit, milestone, launch, after soft, 0d`
  },
  {
    id: 'template-230',
    title: 'Conference Planning Timeline',
    description: 'Tech conference organization schedule',
    category: 'gantt',
    code: `gantt
    title Tech Conference 2026 Planning
    dateFormat YYYY-MM-DD

    section Venue & Date
    Venue Research       :venue, 2026-01-15, 14d
    Contract Negotiation :contract, after venue, 10d
    Deposit Payment      :milestone, deposit, after contract, 0d

    section Speakers
    CFP Open             :cfp, 2026-02-01, 45d
    Speaker Selection    :select, after cfp, 14d
    Speaker Confirmation :confirm, after select, 14d
    Schedule Finalization:sched, after confirm, 7d

    section Marketing
    Early Bird Tickets   :early, 2026-03-01, 30d
    Website Launch       :web, 2026-02-15, 14d
    Email Campaigns      :email, after web, 60d
    Social Media Push    :social, 2026-04-01, 45d
    Final Promotion      :promo, 2026-05-01, 14d

    section Logistics
    Catering Selection   :cater, 2026-04-01, 14d
    AV Equipment         :av, 2026-04-15, 7d
    Signage & Swag       :swag, 2026-04-20, 14d
    Volunteer Training   :vol, 2026-05-08, 3d

    section Event
    Setup Day            :setup, 2026-05-14, 1d
    Conference Day 1     :crit, day1, 2026-05-15, 1d
    Conference Day 2     :crit, day2, 2026-05-16, 1d
    Teardown             :tear, 2026-05-17, 1d`
  },
  {
    id: 'template-231',
    title: 'SaaS Feature Rollout',
    description: 'Phased feature deployment timeline',
    category: 'gantt',
    code: `gantt
    title Feature Rollout: Advanced Analytics
    dateFormat YYYY-MM-DD

    section Development
    Backend API          :crit, api, 2026-02-01, 21d
    Data Pipeline        :pipe, 2026-02-05, 18d
    Frontend Components  :front, after api, 14d
    Integration          :integ, after pipe, 10d

    section Testing
    Internal Alpha       :alpha, after integ, 7d
    Bug Fixes Sprint 1   :fix1, after alpha, 5d
    Beta Cohort Testing  :beta, after fix1, 14d
    Bug Fixes Sprint 2   :fix2, after beta, 5d

    section Documentation
    User Guide           :guide, after front, 10d
    API Documentation    :apidoc, after api, 7d
    Training Videos      :video, after beta, 10d

    section Rollout
    Feature Flag Setup   :flag, after fix2, 3d
    5% Canary            :canary, after flag, 7d
    25% Rollout          :roll25, after canary, 7d
    50% Rollout          :roll50, after roll25, 5d
    100% GA              :crit, milestone, ga, after roll50, 0d

    section Post-Launch
    Monitor Metrics      :monitor, after ga, 14d
    Iterate on Feedback  :iterate, after monitor, 14d`
  },

  // ER DIAGRAMS - Various domains
  {
    id: 'template-232',
    title: 'Fitness Gym Management',
    description: 'Gym membership and class booking database',
    category: 'er',
    code: `erDiagram
    MEMBER ||--o{ MEMBERSHIP : has
    MEMBER ||--o{ CLASS_BOOKING : makes
    MEMBER ||--o{ EQUIPMENT_RENTAL : rents
    MEMBER {
        uuid id PK
        string email UK
        string first_name
        string last_name
        date date_of_birth
        string phone
        string emergency_contact
        date joined_date
    }
    MEMBERSHIP ||--|| MEMBERSHIP_TYPE : "is of"
    MEMBERSHIP {
        uuid id PK
        uuid member_id FK
        uuid type_id FK
        date start_date
        date end_date
        decimal amount_paid
        enum status
    }
    MEMBERSHIP_TYPE {
        uuid id PK
        string name
        decimal monthly_price
        int guest_passes
        boolean pool_access
        boolean sauna_access
    }
    CLASS ||--o{ CLASS_BOOKING : "booked for"
    CLASS ||--|| INSTRUCTOR : "taught by"
    CLASS {
        uuid id PK
        uuid instructor_id FK
        string name
        datetime scheduled_time
        int duration_minutes
        int max_capacity
        string room
    }
    INSTRUCTOR {
        uuid id PK
        string name
        string specialization
        string certification
    }
    CLASS_BOOKING {
        uuid id PK
        uuid member_id FK
        uuid class_id FK
        datetime booked_at
        boolean attended
    }
    EQUIPMENT ||--o{ EQUIPMENT_RENTAL : "involved in"
    EQUIPMENT {
        uuid id PK
        string name
        string category
        boolean available
    }
    EQUIPMENT_RENTAL {
        uuid id PK
        uuid member_id FK
        uuid equipment_id FK
        datetime rented_at
        datetime returned_at
    }`
  },
  {
    id: 'template-233',
    title: 'Real Estate Platform',
    description: 'Property listing and transaction database',
    category: 'er',
    code: `erDiagram
    PROPERTY ||--o{ LISTING : has
    PROPERTY ||--|| ADDRESS : "located at"
    PROPERTY ||--o{ PROPERTY_IMAGE : has
    PROPERTY {
        uuid id PK
        uuid address_id FK
        uuid owner_id FK
        enum property_type
        int bedrooms
        int bathrooms
        int square_feet
        int year_built
        text description
    }
    ADDRESS {
        uuid id PK
        string street
        string city
        string state
        string zip_code
        decimal latitude
        decimal longitude
    }
    LISTING ||--o{ SHOWING : has
    LISTING ||--|| AGENT : "managed by"
    LISTING {
        uuid id PK
        uuid property_id FK
        uuid agent_id FK
        decimal list_price
        date listed_date
        enum status
        enum listing_type
    }
    AGENT ||--|| AGENCY : "works for"
    AGENT {
        uuid id PK
        uuid agency_id FK
        string name
        string license_number
        string phone
        string email
    }
    AGENCY {
        uuid id PK
        string name
        string address
    }
    CLIENT ||--o{ SHOWING : attends
    CLIENT ||--o{ OFFER : makes
    CLIENT {
        uuid id PK
        string name
        string email
        string phone
        boolean pre_approved
        decimal budget_max
    }
    SHOWING {
        uuid id PK
        uuid listing_id FK
        uuid client_id FK
        datetime scheduled_time
        text feedback
    }
    LISTING ||--o{ OFFER : receives
    OFFER {
        uuid id PK
        uuid listing_id FK
        uuid client_id FK
        decimal amount
        text conditions
        enum status
        date expiry_date
    }
    LISTING ||--o| TRANSACTION : "results in"
    TRANSACTION {
        uuid id PK
        uuid listing_id FK
        uuid buyer_id FK
        decimal sale_price
        date closing_date
        decimal commission
    }`
  },
  {
    id: 'template-234',
    title: 'Music Streaming Platform',
    description: 'Music catalog and user streaming database',
    category: 'er',
    code: `erDiagram
    ARTIST ||--o{ ALBUM : releases
    ARTIST ||--o{ ARTIST_GENRE : "tagged with"
    ARTIST {
        uuid id PK
        string name
        text bio
        string image_url
        int monthly_listeners
        date formed_date
    }
    ALBUM ||--o{ TRACK : contains
    ALBUM {
        uuid id PK
        uuid artist_id FK
        string title
        date release_date
        string cover_art_url
        enum album_type
    }
    TRACK ||--o{ STREAM : "played in"
    TRACK ||--o{ PLAYLIST_TRACK : "added to"
    TRACK {
        uuid id PK
        uuid album_id FK
        string title
        int duration_seconds
        int track_number
        string audio_url
        boolean explicit
    }
    GENRE ||--o{ ARTIST_GENRE : categorizes
    GENRE {
        uuid id PK
        string name
    }
    ARTIST_GENRE {
        uuid artist_id FK
        uuid genre_id FK
    }
    USER ||--o{ STREAM : makes
    USER ||--o{ PLAYLIST : creates
    USER ||--o{ FOLLOW : follows
    USER {
        uuid id PK
        string email UK
        string username UK
        string password_hash
        enum subscription_type
        date created_at
    }
    STREAM {
        uuid id PK
        uuid user_id FK
        uuid track_id FK
        datetime played_at
        int duration_listened
    }
    PLAYLIST ||--o{ PLAYLIST_TRACK : contains
    PLAYLIST {
        uuid id PK
        uuid user_id FK
        string name
        boolean is_public
        string cover_url
    }
    PLAYLIST_TRACK {
        uuid playlist_id FK
        uuid track_id FK
        int position
        datetime added_at
    }
    FOLLOW {
        uuid follower_id FK
        uuid artist_id FK
        datetime followed_at
    }`
  },
  {
    id: 'template-235',
    title: 'Online Learning Platform',
    description: 'E-learning courses and student progress',
    category: 'er',
    code: `erDiagram
    COURSE ||--o{ MODULE : contains
    COURSE ||--|| INSTRUCTOR : "created by"
    COURSE ||--o{ ENROLLMENT : has
    COURSE {
        uuid id PK
        uuid instructor_id FK
        uuid category_id FK
        string title
        text description
        decimal price
        int duration_hours
        enum difficulty
        date published_date
    }
    CATEGORY ||--o{ COURSE : categorizes
    CATEGORY {
        uuid id PK
        string name
        uuid parent_id FK
    }
    INSTRUCTOR {
        uuid id PK
        uuid user_id FK
        string bio
        string expertise
        decimal rating
    }
    MODULE ||--o{ LESSON : contains
    MODULE ||--o{ QUIZ : has
    MODULE {
        uuid id PK
        uuid course_id FK
        string title
        int order_num
    }
    LESSON {
        uuid id PK
        uuid module_id FK
        string title
        enum content_type
        string content_url
        int duration_minutes
        int order_num
    }
    QUIZ ||--o{ QUESTION : contains
    QUIZ {
        uuid id PK
        uuid module_id FK
        string title
        int passing_score
        int time_limit_minutes
    }
    QUESTION ||--o{ ANSWER_OPTION : has
    QUESTION {
        uuid id PK
        uuid quiz_id FK
        text question_text
        enum question_type
        int points
    }
    ANSWER_OPTION {
        uuid id PK
        uuid question_id FK
        text option_text
        boolean is_correct
    }
    STUDENT ||--o{ ENROLLMENT : makes
    STUDENT ||--o{ PROGRESS : tracks
    STUDENT {
        uuid id PK
        uuid user_id FK
        date enrolled_date
    }
    ENROLLMENT {
        uuid id PK
        uuid student_id FK
        uuid course_id FK
        date enrolled_date
        enum status
        decimal progress_percent
    }
    PROGRESS ||--|| LESSON : "completed"
    PROGRESS {
        uuid id PK
        uuid student_id FK
        uuid lesson_id FK
        datetime completed_at
    }`
  },
  {
    id: 'template-236',
    title: 'Food Delivery Platform',
    description: 'Restaurant orders and delivery tracking',
    category: 'er',
    code: `erDiagram
    RESTAURANT ||--o{ MENU_ITEM : offers
    RESTAURANT ||--o{ ORDER : receives
    RESTAURANT ||--|| ADDRESS : "located at"
    RESTAURANT {
        uuid id PK
        string name
        uuid address_id FK
        string phone
        decimal rating
        string cuisine_type
        time opens_at
        time closes_at
        boolean is_active
    }
    MENU_ITEM ||--o{ ORDER_ITEM : "included in"
    MENU_ITEM ||--|| MENU_CATEGORY : "belongs to"
    MENU_ITEM {
        uuid id PK
        uuid restaurant_id FK
        uuid category_id FK
        string name
        text description
        decimal price
        string image_url
        boolean is_available
        boolean is_vegetarian
    }
    MENU_CATEGORY {
        uuid id PK
        uuid restaurant_id FK
        string name
        int display_order
    }
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER ||--o{ DELIVERY_ADDRESS : has
    CUSTOMER {
        uuid id PK
        string email UK
        string name
        string phone
        date created_at
    }
    DELIVERY_ADDRESS {
        uuid id PK
        uuid customer_id FK
        string label
        string street
        string city
        string zip
        text instructions
        boolean is_default
    }
    ORDER ||--o{ ORDER_ITEM : contains
    ORDER ||--o| DELIVERY : "fulfilled by"
    ORDER {
        uuid id PK
        uuid customer_id FK
        uuid restaurant_id FK
        uuid address_id FK
        decimal subtotal
        decimal delivery_fee
        decimal tip
        decimal total
        enum status
        datetime placed_at
    }
    ORDER_ITEM {
        uuid id PK
        uuid order_id FK
        uuid menu_item_id FK
        int quantity
        text special_instructions
        decimal unit_price
    }
    DRIVER ||--o{ DELIVERY : makes
    DRIVER {
        uuid id PK
        string name
        string phone
        string vehicle_type
        string license_plate
        decimal rating
        boolean is_available
    }
    DELIVERY {
        uuid id PK
        uuid order_id FK
        uuid driver_id FK
        datetime picked_up_at
        datetime delivered_at
        decimal distance_km
    }
    ADDRESS {
        uuid id PK
        string street
        string city
        string state
        string zip
        decimal lat
        decimal lng
    }`
  },
  {
    id: 'template-237',
    title: 'Subscription Box Service',
    description: 'Recurring subscription box management',
    category: 'er',
    code: `erDiagram
    SUBSCRIBER ||--o{ SUBSCRIPTION : has
    SUBSCRIBER ||--|| SHIPPING_ADDRESS : "ships to"
    SUBSCRIBER {
        uuid id PK
        string email UK
        string name
        string phone
        date joined_date
    }
    SHIPPING_ADDRESS {
        uuid id PK
        uuid subscriber_id FK
        string street
        string city
        string state
        string zip
        string country
    }
    SUBSCRIPTION ||--|| BOX_PLAN : "subscribed to"
    SUBSCRIPTION ||--o{ SHIPMENT : includes
    SUBSCRIPTION ||--o{ BILLING : charged
    SUBSCRIPTION {
        uuid id PK
        uuid subscriber_id FK
        uuid plan_id FK
        date start_date
        date next_billing_date
        enum status
        text preferences
    }
    BOX_PLAN {
        uuid id PK
        string name
        text description
        decimal price
        enum frequency
        int item_count
    }
    PRODUCT ||--o{ SHIPMENT_ITEM : "packed in"
    PRODUCT ||--|| CATEGORY : "belongs to"
    PRODUCT {
        uuid id PK
        uuid category_id FK
        string name
        text description
        decimal retail_value
        string image_url
        int stock_qty
    }
    CATEGORY {
        uuid id PK
        string name
    }
    SHIPMENT ||--o{ SHIPMENT_ITEM : contains
    SHIPMENT {
        uuid id PK
        uuid subscription_id FK
        date ship_date
        string tracking_number
        enum status
        decimal total_value
    }
    SHIPMENT_ITEM {
        uuid id PK
        uuid shipment_id FK
        uuid product_id FK
        int quantity
    }
    BILLING {
        uuid id PK
        uuid subscription_id FK
        decimal amount
        date billing_date
        enum status
        string payment_method_last4
    }`
  },

  // MINDMAPS - Strategic planning
  {
    id: 'template-238',
    title: 'Technical Debt Categorization',
    description: 'Analyze and categorize technical debt',
    category: 'mindmap',
    code: `mindmap
  root((Technical Debt))
    Code Quality
      Duplication
        Copy-paste code
        Missing abstractions
      Complexity
        God classes
        Long methods
        Deep nesting
      Code Smells
        Magic numbers
        Dead code
        Poor naming
    Architecture
      Tight Coupling
        Missing interfaces
        Circular dependencies
      Missing Patterns
        No caching layer
        No event system
      Scalability
        Single points of failure
        No horizontal scaling
    Testing
      Coverage Gaps
        Untested edge cases
        No integration tests
      Flaky Tests
        Race conditions
        External dependencies
      Missing Automation
        Manual regression
        No CI/CD
    Documentation
      Outdated Docs
        API changes
        Architecture drift
      Missing Docs
        Onboarding guide
        Runbooks
    Dependencies
      Outdated Libraries
        Security vulnerabilities
        EOL frameworks
      Version Conflicts
        Dependency hell`
  },
  {
    id: 'template-239',
    title: 'Cloud Migration Strategy',
    description: 'Plan cloud migration approach and phases',
    category: 'mindmap',
    code: `mindmap
  root((Cloud Migration))
    Assessment
      Current State
        Infrastructure audit
        Application inventory
        Dependency mapping
      Requirements
        Performance SLAs
        Compliance needs
        Budget constraints
    Strategy Selection
      Rehost
        Lift and shift
        Quick wins
        Legacy apps
      Replatform
        Minor optimizations
        Managed services
        Database migration
      Refactor
        Cloud native
        Microservices
        Containers
      Replace
        SaaS alternatives
        Build vs buy
    Execution Phases
      Phase 1 - Foundation
        Landing zone
        Network setup
        IAM policies
      Phase 2 - Pilot
        Non-critical apps
        Learn and iterate
      Phase 3 - Migration Waves
        Prioritized workloads
        Parallel tracks
      Phase 4 - Optimization
        Cost optimization
        Performance tuning
    Risk Mitigation
      Data Security
        Encryption
        Access controls
      Business Continuity
        Rollback plans
        DR strategy
      Training
        Team upskilling
        Documentation`
  },
  {
    id: 'template-240',
    title: 'User Onboarding Optimization',
    description: 'Improve new user activation and retention',
    category: 'mindmap',
    code: `mindmap
  root((User Onboarding))
    Pre-Signup
      Landing Page
        Value proposition
        Social proof
        Clear CTA
      Trust Signals
        Security badges
        Testimonials
        Free trial offer
    Signup Flow
      Form Design
        Minimal fields
        Social login
        Progress indicator
      Validation
        Real-time feedback
        Smart defaults
        Error prevention
    First Experience
      Welcome Screen
        Personalization
        Goal setting
        Quick wins
      Product Tour
        Interactive walkthrough
        Tooltips
        Skip option
      Empty States
        Sample data
        Action prompts
        Helpful content
    Activation Metrics
      Key Actions
        Profile completion
        First core action
        Team invite
      Time to Value
        Quick setup
        Templates
        Integrations
    Engagement Loops
      Email Sequences
        Tips and tricks
        Feature highlights
        Success stories
      In-App Messages
        Progress celebration
        Feature discovery
        Help triggers
    Measurement
      Funnel Analysis
        Drop-off points
        Completion rates
      Cohort Tracking
        Retention curves
        Feature adoption`
  },
  {
    id: 'template-241',
    title: 'API Design Principles',
    description: 'Best practices for API design',
    category: 'mindmap',
    code: `mindmap
  root((API Design))
    REST Principles
      Resource Naming
        Nouns not verbs
        Plural collections
        Hierarchical paths
      HTTP Methods
        GET for read
        POST for create
        PUT/PATCH for update
        DELETE for remove
      Status Codes
        2xx Success
        4xx Client errors
        5xx Server errors
    Request Design
      Query Parameters
        Filtering
        Sorting
        Pagination
      Request Body
        JSON schema
        Validation
        Required vs optional
      Headers
        Content-Type
        Accept
        Custom headers
    Response Design
      Envelope Pattern
        Data wrapper
        Meta information
        Error details
      Pagination
        Offset based
        Cursor based
        Link headers
      HATEOAS
        Hypermedia links
        Discoverability
    Security
      Authentication
        API keys
        OAuth 2.0
        JWT tokens
      Authorization
        Scopes
        Rate limiting
        IP allowlisting
    Documentation
      OpenAPI Spec
        Schemas
        Examples
        Try it out
      Change Management
        Versioning
        Deprecation
        Migration guides`
  },
  {
    id: 'template-242',
    title: 'Performance Optimization Guide',
    description: 'Web application performance improvement areas',
    category: 'mindmap',
    code: `mindmap
  root((Performance))
    Frontend
      Loading
        Code splitting
        Lazy loading
        Preloading
        Tree shaking
      Rendering
        Virtual DOM
        Memoization
        Debouncing
        RAF scheduling
      Assets
        Image optimization
        Font loading
        SVG sprites
        CDN delivery
    Backend
      Database
        Query optimization
        Indexing strategy
        Connection pooling
        Read replicas
      Caching
        Application cache
        Redis/Memcached
        HTTP caching
        CDN edge caching
      API
        Response compression
        Batch endpoints
        GraphQL DataLoader
    Infrastructure
      Scaling
        Horizontal scaling
        Auto-scaling
        Load balancing
      Compute
        Right-sizing
        Spot instances
        Serverless
      Network
        HTTP/2
        Keep-alive
        Compression
    Monitoring
      Metrics
        Core Web Vitals
        TTFB
        Response times
      Tools
        APM solutions
        Real User Monitoring
        Synthetic testing
      Alerting
        Thresholds
        Anomaly detection`
  },
  {
    id: 'template-243',
    title: 'Agile Release Planning',
    description: 'Release train planning and coordination',
    category: 'mindmap',
    code: `mindmap
  root((Release Planning))
    Preparation
      Backlog Grooming
        Feature prioritization
        Story estimation
        Dependency identification
      Capacity Planning
        Team availability
        Velocity history
        Risk buffers
    PI Planning
      Vision & Goals
        Business objectives
        Technical objectives
        Key metrics
      Feature Breakdown
        User stories
        Enablers
        Spikes
      Risk Assessment
        Dependencies
        Technical risks
        Resource risks
    Execution
      Sprint Cadence
        Sprint planning
        Daily standups
        Sprint review
        Retrospective
      Integration Points
        Feature branches
        Release branches
        Environment promotion
    Quality Gates
      Definition of Done
        Code review
        Testing complete
        Documentation
      Release Criteria
        Performance benchmarks
        Security scan
        Accessibility check
    Go-Live
      Release Checklist
        Deployment runbook
        Rollback plan
        Communication plan
      Post-Release
        Monitoring
        Incident response
        Feedback collection`
  },

  // GIT GRAPHS - Advanced workflows
  {
    id: 'template-244',
    title: 'Trunk-Based Development',
    description: 'Short-lived branches with frequent integration',
    category: 'git',
    code: `gitGraph
    commit id: "feat: init"
    branch feature/small-change
    commit id: "feat: add button"
    checkout main
    merge feature/small-change
    commit id: "ci: update pipeline"
    branch feature/api-endpoint
    commit id: "feat: endpoint"
    commit id: "test: add tests"
    checkout main
    merge feature/api-endpoint
    branch release/1.0
    commit id: "chore: bump version"
    checkout main
    commit id: "feat: quick fix"
    checkout release/1.0
    cherry-pick id: "feat: quick fix"
    commit tag: "v1.0.0"
    checkout main
    branch feature/next-feature
    commit id: "wip: feature"
    checkout main
    merge feature/next-feature
    commit id: "feat: another"`
  },

  // Additional diverse templates
  {
    id: 'template-249',
    title: 'Kubernetes Pod Lifecycle',
    description: 'Pod states in Kubernetes cluster',
    category: 'state',
    code: `stateDiagram-v2
    [*] --> Pending

    state Pending {
        [*] --> Scheduling
        Scheduling --> ImagePulling: nodeAssigned
        ImagePulling --> Scheduled: imagePulled
    }

    Pending --> Running: containersReady

    state Running {
        [*] --> Healthy
        Healthy --> Unhealthy: failedProbe
        Unhealthy --> Healthy: probeSuccess
        Unhealthy --> CrashLoopBackOff: restartLimit
    }

    Running --> Succeeded: completed
    Running --> Failed: error
    CrashLoopBackOff --> Running: backoffReset
    CrashLoopBackOff --> Failed: maxBackoff

    state Terminating {
        [*] --> PreStop
        PreStop --> GracefulShutdown
        GracefulShutdown --> Terminated
    }

    Running --> Terminating: delete
    Failed --> [*]
    Succeeded --> [*]
    Terminating --> [*]`
  },
  {
    id: 'template-250',
    title: 'Team Budget Allocation',
    description: 'Engineering team budget breakdown',
    category: 'pie',
    code: `pie showData
    title Engineering Budget Allocation Q2 2026
    "Personnel" : 55
    "Cloud Infrastructure" : 18
    "Software Licenses" : 12
    "Training & Development" : 6
    "Hardware & Equipment" : 5
    "Contractors" : 4`
  },
];
