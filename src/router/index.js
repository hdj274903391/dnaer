import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import About from '@/components/About/about'
import AboutIndex from '@/components/About/about-index'
import Team from '@/components/About/team'
import Target from '@/components/About/target'
import Culture from '@/components/About/culture'
import Create from '@/components/Create/create'
import CreateIndex from '@/components/Create/create-index'
import Use from '@/components/Create/use'
import Benefit from '@/components/Create/benefit'
import Laboratory from '@/components/Laboratory/laboratory'
import LaboratoryIndex from '@/components/Laboratory/laboratory-index'
import BigData from '@/components/Laboratory/bigData'
import Experience from '@/components/Laboratory/experience'
import Distributed from '@/components/Laboratory/distributed'
import Contact from '@/components/Contact/contact'
import contactIndex from '@/components/Contact/contact-index'
import Information from '@/components/Contact/information'
import Recruit from '@/components/Recruit/recruit'
import RecruitIndex from '@/components/Recruit/recruit-index'
import Design from '@/components/Recruit/design'
import Dev from '@/components/Recruit/dev'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/about',
      component: About,
      children: [
        {
          path: '/about/',
          name: 'about',
          component: AboutIndex
        },
        {
          path: 'target',
          name: 'target',
          component: Target
        },
        {
          path: 'team',
          name: 'team',
          component: Team
        },
        {
          path: 'culture',
          name: 'culture',
          component: Culture
        }
      ]
    },
    {
      path: '/create',
      component: Create,
      children: [
        {
          path: '/create/',
          name: 'create',
          component: CreateIndex
        },
        {
          path: 'use',
          name: 'use',
          component: Use
        },
        {
          path: 'benefit',
          name: 'benefit',
          component: Benefit
        }
      ]
    },
    {
      path: '/laboratory',
      component: Laboratory,
      children: [
        {
          path: '/laboratory/',
          name: 'laboratory',
          component: LaboratoryIndex
        },
        {
          path: 'bigData',
          name: 'bigData',
          component: BigData
        },
        {
          path: 'experience',
          name: 'experience',
          component: Experience
        },
        {
          path: 'distributed',
          name: 'distributed',
          component: Distributed
        }
      ]
    },
    {
      path: '/contact',
      component: Contact,
      children: [
        {
          path: '/contact/address',
          name: 'contact',
          component: contactIndex
        },
        {
          path: 'information',
          name: 'information',
          component: Information
        }
      ]
    },
    {
      path: '/recruit',
      component: Recruit,
      children: [
        {
          path: '/recruit/',
          name: 'recruit',
          component: RecruitIndex
        },
        {
          path: 'design',
          name: 'design',
          component: Design
        },
        {
          path: 'dev',
          name: 'dev',
          component: Dev
        }
      ]
    }
  ]
})
