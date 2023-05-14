package com.xenontest.service;

import com.xenontest.dao.ContactDao;
import com.xenontest.model.ContactForm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactServiceImpl implements ContactService{


    @Autowired
    private  ContactDao contactDao;
    @Override
    public ContactForm addForm(ContactForm contactForm) {
        return contactDao.save(contactForm);
    }
}
