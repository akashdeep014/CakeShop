package com.xenontest.dao;

import com.xenontest.model.ContactForm;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContactDao extends JpaRepository<ContactForm, Integer> {


}
