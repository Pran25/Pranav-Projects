package com.demo.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.demo.Model.Product;
import com.demo.Repository.ProductRepository;
import com.demo.Service.ProductService;
@Service
public class ProductServiceImpl implements ProductService{
	@Autowired
	private ProductRepository repository;

	@Override
	public Product saveproduct(Product product) {
		
		return repository.save(product);
	}

	@Override
	public List<Product> getallproduct() {
		
		return repository.findAll();
	}

	@Override
	public Product getproductbyid(Long id) {

		return repository.findById(id).get();
	}

	@Override
	public String deleteproduct(Long id) {
		
		Product product = repository.findById(id).get();
		
		if(product!=null)
		{
			repository.delete(product);
			return "Product Deleted Successfully";
		}
		return "Something Went Wrong";
		
	}

	@Override
	public Product editProduct(Product p, Long id) {
		
		Product oldproduct = repository.findById(id).get();
		
		oldproduct.setProdName(p.getProdName());
		oldproduct.setProdDes(p.getProdDes());
		oldproduct.setProdPrice(p.getProdPrice());
		oldproduct.setStatus(p.getStatus());
		
		return repository.save(oldproduct) ;
	}

}
