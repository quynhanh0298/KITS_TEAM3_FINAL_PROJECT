package edu.kits.finalproject.Service.impl;

import edu.kits.finalproject.Domain.OnlineClass;
import edu.kits.finalproject.Repository.OnlineClassRepository;
import edu.kits.finalproject.Service.OnlineClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OnlineClassServiceImpl implements OnlineClassService {

    @Autowired
    private OnlineClassRepository onlineClassRepository;

    @Override
    public List<OnlineClass> getAllOnlineClass() {
        return onlineClassRepository.findAll();
    }
}
