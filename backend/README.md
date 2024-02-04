
## APIS:

---
```

curl --location 'http://localhost:8001/v1/llm/query' \
--header 'Content-Type: application/json' \
--data '{
    "query": "What is Glowville Communications?"
}'



expected resp:

Status: 200 Ok


{
    "query": "What is Glowville Communications?",
    "answer": "Glowville Communications is an organization based in Lagos, Nigeria. They offer creative content, branding, and social media services. Their mission is to provide quality services and strive to be the best in their field. Glowville Communications has a team of 50 employees and generates an annual revenue of $8.3 million. They have a website at [glowville.net](http://glowville.net)."
}


```
---






