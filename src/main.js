import './style.css'
import pigaiCameraDimensions from './assets/projects/pigai-camera-dimensions.png'
import pigaiMonitoring from './assets/projects/pigai-monitoring-alert-platform.png'
import pigaiDetection from './assets/projects/pigai-yolo-detection-results.png'
import barbersaasPricing from './assets/projects/barbersaas-pricing.png'
import barbersaasAdmin from './assets/projects/barbersaas-admin-dashboard.png'
import barbersaasCustomer from './assets/projects/barbersaas-customer-dashboard.png'
import fetchCreateTask from './assets/projects/fetch-create-task.png'
import fetchTrackRider from './assets/projects/fetch-track-rider.png'
import pawfectPetList from './assets/projects/pawfect-pet-list.png'
import pawfectAdoptionForm from './assets/projects/pawfect-adoption-form.png'
import pawfectPendingAdoptions from './assets/projects/pawfect-pending-adoptions.png'

const projects = [
  {
    number: '01', category: 'Capstone Project | Bukidnon State University', title: 'Pig AI Watch: A Computer Vision-Based Farrowing System with Real-Time Alerts and Video Feedback',
    documentation: '/docs/PigAIWatch_FullDocumentation.pdf', repository: 'https://github.com/durendal11/Prisma-atlas',
    stack: ['Python', 'YOLO11s (ONNX)', 'OpenCV', 'FFmpeg', 'FastAPI', 'React JS', 'TypeScript', 'PostgreSQL', 'WebSockets'],
    description: 'A computer vision-based farrowing monitoring and alert platform built for smallholder swine farms. It ingests live RTSP video streams from a Tapo C310 network camera to detect piglets, classify sow postures, calculate crushing-risk proximity scores, and deliver real-time web and mobile alerts.',
    highlights: ['Custom-trained Ultralytics YOLO11s model detecting 5 classes (piglet, sow-sleep, sow-sleep-lactating, sow-stand-feed, sow-stand-lactating) achieving 96.6% mAP@50, 97.6% Precision, and 97.2% Recall on the test set', 'Rule-based backend spatial overlap and proximity engine for real-time crushing-risk scoring (Low, Medium, High)', 'Asynchronous FastAPI + WebSocket pipeline streaming live bounding-box overlays, piglet counts, and instant notifications to a React/TypeScript dashboard backed by PostgreSQL'],
    visuals: [
      { label: 'PigAI Watch Monitoring and Alert Platform', image: pigaiMonitoring },
      { label: 'YOLOv11-Based Detection Results for Piglet and Sow Detection', image: pigaiDetection },
      { label: 'PigAI Camera Dimensions', image: pigaiCameraDimensions },
    ],
  },
  {
    number: '02', category: 'Academic Web Development Project', title: 'Pawfect Match — Dog Adoption Management System',
    documentation: '/docs/Pawfect%20Match%20Document.pdf', repository: 'https://github.com/Sciatzy/Pawfect-Match',
    stack: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Apache'],
    description: 'A web-based pet adoption platform designed for Bukidnon Aspin Refuge Kennel (BARK) to streamline adoption applications, facilitate stray animal reporting, and provide shelter management tools.',
    highlights: ['Adoptable pet browsing catalog with filtering options', 'Digital adoption application submission workflow', 'Public stray animal reporting with condition details and urgency levels', 'Admin dashboard for managing pets, reviewing pending adoption requests, and tracking rescued strays'],
    visuals: [
      { label: 'Pet List - Display adoptable pets with filters', image: pawfectPetList },
      { label: 'Adoption Form - Personal info + pet preferences', image: pawfectAdoptionForm },
      { label: 'Admin Pending Adoptions - View and approve pending requests', image: pawfectPendingAdoptions },
    ],
  },
  {
    number: '03', category: 'Android Mobile Application', title: 'FETCH: A User-Defined Errand Marketplace App',
    documentation: '/docs/Fetch_FullDocument.pdf', repository: 'https://github.com/Sciatzy/Fetch',
    stack: ['Java/Kotlin', 'Android Studio', 'Firebase Firestore', 'FCM', 'PayMongo API', 'Google Maps SDK', 'osmdroid'],
    description: 'A role-based errand and delivery mobile platform connecting customers, riders, and administrators to request, fulfill, and monitor hyper-local tasks.',
    highlights: ['Map-assisted task creation with tap-to-pin pickup/drop-off location selection', 'Real-time distance calculation and fee estimation endpoint (/v1/pricing/estimate)', 'PayMongo checkout link generation for cashless payments (/v1/payments/paymongo/checkout)', 'Pasabuy transaction workflow with in-app chat, location sharing, and image proof upload', 'Firebase Cloud Messaging (FCM) push notifications for real-time status updates'],
    visuals: [
      { label: 'Create Task with Location', image: fetchCreateTask },
      { label: 'Track Rider', image: fetchTrackRider },
    ],
  },
  {
    number: '04', category: 'Multi-Tenant Web System Project', title: 'Online Barbershop Booking and Management System (SaaS)',
    documentation: '/docs/Barbershop_FullDocument.pdf', repository: 'https://github.com/Sciatzy/BarbershopSaas',
    stack: ['Laravel 12', 'MySQL', 'Blade', 'Tailwind CSS', 'PayMongo API', 'Google Calendar API'],
    description: 'A multi-tenant SaaS web platform that digitizes barbershop operations, offering real-time appointment scheduling with overlap/conflict detection, role-based access control, PayMongo subscription billing, and multi-tenant database isolation.',
    highlights: ['Database-per-tenant architecture with domain-based resolution', '5 User Roles (Platform Admin, Barbershop Admin, Branch Manager, Barber, Customer)', 'Automated subscription billing via PayMongo webhooks (Starter, Professional, Business, Enterprise)', 'Attendance tracking (arrived, late, no-show) and points system'],
    visuals: [
      { label: 'User Home Page (Pricing)', image: barbersaasPricing },
      { label: 'Central App Admin Dashboard', image: barbersaasAdmin },
      { label: 'Customer Dashboard', image: barbersaasCustomer },
    ],
  },
]

const projectMarkup = projects.map((project) => `
  <article class="project">
    <div class="project__visuals">
      ${project.visuals.map((visual, index) => {
        const label = typeof visual === 'string' ? visual : visual.label
        const image = typeof visual === 'string' ? '' : `<img src="${visual.image}" alt="${label}" loading="lazy">`
        return `<div class="visual visual--${index + 1} ${image ? 'visual--image' : ''}" ${image ? `role="button" tabindex="0" data-image="${visual.image}" data-label="${label}"` : ''}>${image}<span class="visual__index">0${index + 1}</span><span>${label}</span></div>`
      }).join('')}
    </div>
    <div class="project__body">
      <div class="project__eyebrow"><span>${project.number}</span><span>${project.category}</span></div>
      <h2>${project.title}</h2>
      <p class="project__description">${project.description}</p>
      <div class="tag-list">${project.stack.map((tag) => `<span>${tag}</span>`).join('')}</div>
      <div class="project-links"><a class="documentation-link" href="${project.documentation}" target="_blank" rel="noreferrer" download>View / Download Documentation PDF <span>↗</span></a><a class="documentation-link" href="${project.repository}" target="_blank" rel="noreferrer">View Repository <span>↗</span></a></div>
      <div class="highlights"><strong>Highlights</strong>${project.highlights.map((highlight) => `<div><b>+</b>${highlight}</div>`).join('')}</div>
    </div>
  </article>
`).join('')

document.querySelector('#app').innerHTML = `
  <header class="topbar" id="top">
    <div><h1>Gregg Reiven R. Babaylan</h1><p>BS Information Technology | Bukidnon State University</p></div>
    <div class="header-links"><a href="https://github.com/Goriooooo" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/gregg-reiven-babaylan-0a465243b/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:babaylangemini@gmail.com">babaylangemini@gmail.com</a><a href="tel:09360322143">09360322143</a></div>
  </header>
  <main>
    <section class="intro section-wrap"><h2>Projects</h2></section>
    <section class="projects section-wrap" id="projects">${projectMarkup}</section>
  </main>
  <footer class="footer section-wrap" id="contact">
    <div><h2>Contact</h2><p>Gregg Reiven R. Babaylan</p></div>
    <div class="contact-links">
      <a href="mailto:babaylangemini@gmail.com">babaylangemini@gmail.com</a>
      <a href="tel:09360322143">09360322143</a>
      <a href="https://github.com/Goriooooo" target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/gregg-reiven-babaylan-0a465243b/" target="_blank" rel="noreferrer">LinkedIn</a>
      <button id="downloadResume" type="button">Download Resume</button>
    </div>
  </footer>
  <div class="image-modal" id="imageModal" role="dialog" aria-modal="true" aria-label="Image preview" hidden>
    <button class="image-modal__close" id="closeImageModal" type="button" aria-label="Close image preview">&times;</button>
    <img id="imageModalPreview" src="" alt="">
    <p id="imageModalLabel"></p>
  </div>
`

const imageModal = document.querySelector('#imageModal')
const imageModalPreview = document.querySelector('#imageModalPreview')
const imageModalLabel = document.querySelector('#imageModalLabel')

const closeImageModal = () => {
  imageModal.hidden = true
  document.body.classList.remove('modal-open')
}

document.querySelectorAll('.visual--image').forEach((visual) => {
  const openImageModal = () => {
    imageModalPreview.src = visual.dataset.image
    imageModalPreview.alt = visual.dataset.label
    imageModalLabel.textContent = visual.dataset.label
    imageModal.hidden = false
    document.body.classList.add('modal-open')
  }

  visual.addEventListener('click', openImageModal)
  visual.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openImageModal()
    }
  })
})

document.querySelector('#closeImageModal').addEventListener('click', closeImageModal)
imageModal.addEventListener('click', (event) => {
  if (event.target === imageModal) closeImageModal()
})
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !imageModal.hidden) closeImageModal()
})

document.querySelector('#downloadResume').addEventListener('click', () => {
  const profile = 'Gregg Reiven R. Babaylan\nBS Information Technology | Bukidnon State University\n\nEmail: babaylangemini@gmail.com\nPhone: 09360322143\nGitHub: https://github.com/Goriooooo\nLinkedIn: https://www.linkedin.com/in/gregg-reiven-babaylan-0a465243b/'
  const link = document.createElement('a')
  link.href = URL.createObjectURL(new Blob([profile], { type: 'text/plain' }))
  link.download = 'Gregg-Babaylan-Resume-Profile.txt'
  link.click()
  URL.revokeObjectURL(link.href)
})