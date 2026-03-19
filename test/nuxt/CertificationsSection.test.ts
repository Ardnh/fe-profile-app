// Certifications.test.ts
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import Certifications from '../../app/components/CertificationsSection.vue'

const certifications = [
        'Basic Web Programming — Dicoding',
        'Frontend Development for Beginners — Dicoding',
        'Basic JavaScript Programming — Dicoding',
        'Building Web Applications with React — Dicoding',
        'Vue - The Complete Guide (Including Router & Composition API)',
    ]

describe('Certifications', () => {

    it('merender daftar sertifikasi dengan benar', () => {

        const wrapper = mount(Certifications, {
        props: { certifications }
        })

        const items = wrapper.findAll('li')
        expect(items).toHaveLength(5)

        certifications.forEach((cert, i) => {
            expect(items[i].text()).toContain(cert)
        })
    })

    it('setiap item memiliki tanda "—" sebagai bullet', () => {
        const wrapper = mount(Certifications, {
        props: { certifications: ['AWS Certified'] }
        })

        const bullet = wrapper.find('li span')
        expect(bullet.text()).toBe('—')
    })

    it('menampilkan label "Certs" di bagian atas', () => {
        const wrapper = mount(Certifications, {
        props: { certifications: [] }
        })

        expect(wrapper.find('p').text()).toContain('Certs')
    })

    it('merender list kosong tanpa error ketika certifications kosong', () => {
        const wrapper = mount(Certifications, {
            props: { certifications: [] }
        })

        const items = wrapper.findAll('li')
        expect(items).toHaveLength(0)
    })

    it('merender dengan benar untuk satu sertifikasi', () => {
        const wrapper = mount(Certifications, {
            props: { certifications: ['CompTIA Security+'] }
        })

        const items = wrapper.findAll('li')
        expect(items).toHaveLength(1)
        expect(items[0].text()).toContain('CompTIA Security+')
    })

    it('merender sertifikasi dengan karakter spesial', () => {
        const certifications = ['AWS: Cloud & DevOps (2024)', 'Node.js — Advanced']

        const wrapper = mount(Certifications, {
        props: { certifications }
        })

        const items = wrapper.findAll('li')
        expect(items[0].text()).toContain('AWS: Cloud & DevOps (2024)')
        expect(items[1].text()).toContain('Node.js — Advanced')
    })
})